import {
	SET_USER,
	SIGN_UP,
	SIGN_IN,
	ACTIVATE,
	GET_USER,
	LOG_OUT,
	RESET_PASSWORD,
	TOGGLE_FAVORITE,
} from "../action-types/user_action_types";
import {
	IUserData,
	IAuthorizeData,
	ISignIn,
	ITokens,
	IMovieInfo,
} from "../../types";
import { getToken } from "../../utils";
import { takeEvery, put } from "redux-saga/effects";

const signUp = (user: IUserData) => {
	return {
		type: SIGN_UP,
		user,
	};
};

const signIn = (signInData: ISignIn) => {
	return {
		type: SIGN_IN,
		signInData,
	};
};

const logOut = () => {
	return {
		type: LOG_OUT,
	};
};

const setUser = (user: IUserData) => ({
	type: SET_USER,
	user,
});

const getUser = () => {
	return {
		type: GET_USER,
	};
};

const resetPassword = (email: any) => {
	return {
		type: RESET_PASSWORD,
		email,
	};
};

const toggleFavorite = (movie: IMovieInfo) => ({
	type: TOGGLE_FAVORITE,
	movie,
});

function* getUserData() {
	const accessToken: string = yield getToken();
	const userResp: Response = yield fetch(
		`https://studapi.teachmeskills.by/auth/users/me/`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);
	if (userResp.status === 200) {
		const user: IUserData = yield userResp.json();
		yield put(setUser(user));
		window.location.pathname = "/";
	}
}

function* signUpUser(action: any) {
	const { user } = action;
	const URL = `https://studapi.teachmeskills.by/auth/users/`;
	const resp: Response = yield fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
}

function* signInUser(action: any) {
	const { signInData } = action;

	const URL = `https://studapi.teachmeskills.by/auth/jwt/create/`;
	const resp: Response = yield fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(signInData),
	});

	if (resp.status === 200) {
		const tokens: ITokens = yield resp.json();
		const { access, refresh } = tokens;
		localStorage.setItem("access", access);
		localStorage.setItem("refresh", refresh);

		yield put(getUser());
	}
}

function* resetUserPassword(action: any) {
	const { email } = action;
	const URL = `https://studapi.teachmeskills.by/auth/users/reset_password/`;
	const resp: Response = yield fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(email),
	});
}

const activate = (auth: IAuthorizeData) => {
	return {
		type: ACTIVATE,
		auth,
	};
};

function* fetchActivate(action: any) {
	const URL = `https://studapi.teachmeskills.by/auth/users/activation/`;
	const resp: Response = yield fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(action.auth),
	});
}

function* watcherUser() {
	yield takeEvery(SIGN_UP, signUpUser);
	yield takeEvery(SIGN_IN, signInUser);
	yield takeEvery(ACTIVATE, fetchActivate);
	yield takeEvery(GET_USER, getUserData);
	yield takeEvery(RESET_PASSWORD, resetUserPassword);
}

export {
	watcherUser,
	signUp,
	activate,
	signIn,
	setUser,
	logOut,
    resetPassword,
    toggleFavorite,
};
