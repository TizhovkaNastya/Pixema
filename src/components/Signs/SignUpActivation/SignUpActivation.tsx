 import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { activate } from "../../../redux/action-creators/user_action_creators";

export const SignUpActivation = () => {
	const dispatch = useDispatch();
	const { uid, token } = useParams();
	useEffect(() => {
		const auth = {
			'uid': uid,
			'token': token,
		};
		dispatch(activate(auth));
	}, []);

	return null
};