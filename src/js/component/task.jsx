import React from "react";
import PropTypes from "prop-types";

const Task = props => {
	return (
		<li>
			{props.label}
			<i
				className="far fa-trash-alt"
				onClick={() => props.delete(props.id)}></i>
		</li>
	);
};

Task.propTypes = {
	label: PropTypes.string,
	delete: PropTypes.func,
	id: PropTypes.string
};

export default Task;
