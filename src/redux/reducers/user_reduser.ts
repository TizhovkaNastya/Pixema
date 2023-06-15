import { IMovieInfo, IUserState } from "../../types";
import { LOG_OUT, SET_USER, TOGGLE_FAVORITE } from "../action-types/user_action_types";

const initialState = {
	authorizedUser: {
		username: "",
		email: "",
		id: "",
	},
	favorites: [] as IMovieInfo[],
}

const getInitialState = () => {
	const localState = localStorage.localState
	if (localState) {
		const parse = JSON.parse(localState)
		const { user } = parse
		return user
		
	}
	return initialState
};

const userReducer = (state: IUserState = getInitialState(), action: any) => {
	switch (action.type) {
		case SET_USER: {
			const { user } = action;
			return {
				...state,
				authorizedUser:user,
			};
		}

		case LOG_OUT: {
			return {
				...state,
				authorizedUser: {
					username: "",
					email: "",
					id: "",
				},
			};
		}
		case TOGGLE_FAVORITE: {
			const { movie } = action;
            const index = state.favorites?.findIndex(el => el.id === movie.id);
			const newFavorites = [...state?.favorites] || []
 
            if (index === -1) {
                newFavorites.push(movie);
            } else {
                newFavorites.splice(index, 1);
            }
            return {
                ...state,
                favorites: newFavorites,
            }
        }
		default: {
			return state;
		}
	}
};

export { userReducer };