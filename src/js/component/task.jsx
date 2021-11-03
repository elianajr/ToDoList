import React from "react";
import PropTypes from "prop-types";

const Task = props => {
	return (
		<li>
			{props.label}
			<span>
				<i
					className="far fa-trash-alt"
					onClick={() => props.delete(props.id)}></i>
			</span>
		</li>
	);
};

Task.propTypes = {
	label: PropTypes.string,
	delete: PropTypes.func,
	id: PropTypes.string
};

export default Task;
