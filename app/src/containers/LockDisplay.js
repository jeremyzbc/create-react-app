import React from 'react';
import { connect } from 'react-redux';

const LockDisplay = props => (
	<div className="lock-right-display">
		<h1 className="lock-right-display-text">{
			!props.display && props.invalid? 'INVALID': props.display
		}</h1>
	</div>
);

function mapStateToProps(state){
	return {
		display: state.lock.display,
		invalid: state.lock.invalid
	}
}

export default connect(mapStateToProps)(LockDisplay);