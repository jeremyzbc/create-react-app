import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
	<div onClick={props.onClick} className="lock-left-keyboard-button">
		{props.value}
	</div>
);

Button.propTypes = {
	value: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Button;