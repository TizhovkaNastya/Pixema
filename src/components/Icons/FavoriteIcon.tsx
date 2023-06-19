import { FC, useContext, useState } from "react";
type IconLikeType = {
	onClick?: () => void;
	className: string
    
};

export const FavoriteIcon: FC<IconLikeType> = ({ onClick, className }) => {
	return (
		<svg
			className={className}
			onClick={onClick}
			width="22"
			height="23"
			viewBox="0 0 22 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8 13C8.204 13 8.407 13.062 8.581 13.187L14 17.057V3C14 2.449 13.552 2 13 2H3C2.449 2 2 2.449 2 3V17.057L7.419 13.187C7.593 13.062 7.796 13 8 13ZM15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z"
                fill={className} 
			/>
		</svg>
	);
};
  
