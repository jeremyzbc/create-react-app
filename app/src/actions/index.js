import * as actionTypes from './../actionTypes';

export function enterPIN(number){
	return {
		type: actionTypes.ENTER_PIN,
		number
	};
}

export function clearPIN(){
	return {
		type: actionTypes.CLEAR_PIN
	};
}

export function submitPIN(number){
	return {
		type: actionTypes.SUBMIT_PIN
	};
}