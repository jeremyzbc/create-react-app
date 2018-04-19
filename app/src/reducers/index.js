import { combineReducers } from 'redux';
import * as actionTypes from './../actionTypes';


const lockReducer = (state = {}, action) => {
	switch(action.type){
		case actionTypes.ENTER_PIN:{

		}
		case actionTypes.CLEAR_PIN:{

		}
		case actionTypes.SUBMIT_PIN:{

		}
		default:
			return state;
	}
};

const reducers = combineReducers({
	lock: lockReducer
});

export default reducers;