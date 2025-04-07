import React from "react";

type AlertBoxProps = {
	message: string;
	type: string;
	className: string;
};
const AlertBox = ({ message, type, className }: AlertBoxProps) => {
	return <div className={`${className} alert-${type}`}>{message}</div>;
};

export default AlertBox;
