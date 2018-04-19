import { combineReducers } from 'redux';
import * as actionTypes from './../actionTypes';

const initialState = {
	display: '',
	locked: false
};

const PIN_LENGTH = 4;

const lockReducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.ENTER_PIN:{
			// append if length less than PIN_LENGTH
			if(state.display.length < PIN_LENGTH){
				return {
					...state,
					display: state.display + action.number,
					invalid: false
				}
			}
			return state;
		}
		case actionTypes.CLEAR_PIN:{
			return {
				...state,
				display: ''
			}
		}
		case actionTypes.SUBMIT_PIN:{
			if(state.display.length < PIN_LENGTH){
				return {
					...state,
					display: '',
					invalid: true
				}
			}
			else if(state.locked){
				// locked and pin matched
				if(state.pin == state.display){
					return {
						...state,
						display: '',
						invalid: false,
						locked: false
					};
				}
				// locked and pin not matched
				else{
					return {
						...state,
						display: '',
						invalid: true
					};
				}
			}
			else{
				// safe open
				return {
					...state,
					display: '',
					invalid: false,
					locked: true,
					pin: state.display
				};
			}
		}
		default:
			return state;
	}
};

const reducers = combineReducers({
	lock: lockReducer
});

export default reducers;