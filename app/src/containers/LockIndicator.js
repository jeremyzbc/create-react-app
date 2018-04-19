import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

const LockIndicator = props => (
	<div className={classnames('lock-right-indicator', {
		'lock-right-indicator-unlock': !props.locked,
		'lock-right-indicator-lock': props.locked,
	})}/>
);

function mapStateToProps(state){
	return {
		locked: state.lock.locked
	}
}

export default connect(mapStateToProps)(LockIndicator);