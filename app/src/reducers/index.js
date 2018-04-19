import { combineReducers } from 'redux';
import * as actionTypes from './../actionTypes';

const initialState = {
	display: '',
	locked: false
};

const lockReducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.ENTER_PIN:{
			if(state.display.length < 4){
				return {
					...state,
					display: state.display + action.number
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
			if(state.display.length < 4){
				return {
					...state,
					display: '',
					invalid: true
				}
			}
			else if(state.locked){
				if(state.pin == state.display){
					return {
						...state,
						display: '',
						invalid: false,
						locked: false
					};
				}
				else{
					return {
						...state,
						display: '',
						invalid: true
					};
				}
			}
			else{
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