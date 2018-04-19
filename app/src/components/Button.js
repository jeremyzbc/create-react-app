import React from 'react';

const Button = props => (
	<div onClick={props.onClick} className="lock-left-keyboard-button">
		{props.value}
	</div>
);

export default Button;