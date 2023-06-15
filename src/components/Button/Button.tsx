import { FC } from "react";
import { IButton } from "../../types";
import "./button.css";

export const Button: FC<IButton> = ({
	className,
	callback,
	content,
	isActive,
}) => {
	return (
		<button type="button" className={className}
			disabled={isActive} onClick={() => callback()}>
			{content}
		</button>
	);
};
