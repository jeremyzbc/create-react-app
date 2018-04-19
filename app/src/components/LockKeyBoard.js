import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Button from './Button';

const LockKeyBoard = props => (
	<div className="lock-left-keyboard">
		<Button onClick={ () => props.enterPIN(1) } value={1}/>
		<Button onClick={ () => props.enterPIN(2) } value={2}/>
		<Button onClick={ () => props.enterPIN(3) } value={3}/>
		<Button onClick={ () => props.enterPIN(4) } value={4}/>
		<Button onClick={ () => props.enterPIN(5) } value={5}/>
		<Button onClick={ () => props.enterPIN(6) } value={6}/>
		<Button onClick={ () => props.enterPIN(7) } value={7}/>
		<Button onClick={ () => props.enterPIN(8) } value={8}/>
		<Button onClick={ () => props.enterPIN(9) } value={9}/>
		<Button onClick={ () => props.clearPIN() } value='CLR'/>
		<Button onClick={ () => props.enterPIN(0) } value={0}/>
		<Button onClick={ () => props.submitPIN() } value='ENTER'/>
	</div>
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(LockKeyBoard);