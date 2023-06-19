import { IMovieInfo } from "../../types";
import { setCurrentPage, setMovie, setSelectedMovie, setTotal,
	setLoading, setSelectedPopular } from "../action-creators/movie_action_creators";
import { SET_CURRENT_PAGE, SET_MOVIE, SET_SELECTED_MOVIE, SET_TOTAL,
	SET_LOADING, SET_SELECTED_POPULAR } from "../action-types/movie_action_types";

const initialState = {
	movies: [] as IMovieInfo[],
	similarMovies: [] as IMovieInfo[],
	selectedPost: {},
	search: "",
	currentPage: 1,
	total: 20,
	selectedPopular: '',
	isLoading: false
};
type actionsType =
	| ReturnType<typeof setMovie>
	| ReturnType<typeof setSelectedMovie>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof setTotal>
	| ReturnType<typeof setLoading>
	| ReturnType<typeof setSelectedPopular>;
	
const moviesReducer = (state = initialState, action: actionsType) => {
	switch (action.type) {	
		case SET_SELECTED_POPULAR: {
			console.log(action.payload)
			return {
				...state,
				selectedPopular: action.payload,
			};
		}
		case SET_LOADING: {
			return {
				...state,
			 isLoading:action.isLoading
			};
		}
		case SET_MOVIE: {
			const { movies } = action;
			return {
				...state,
				movies,
			};
		}
		case SET_SELECTED_MOVIE: {
			const { movie } = action.selectedPost;
			return {
				...state,
				selectedPost: movie,
			};
		}
		case SET_CURRENT_PAGE: {
			const { currentPage } = action;
			return {
				...state,
				currentPage: currentPage,
			};
		}
		case SET_TOTAL: {
			const { total } = action;
			return {
				...state,
				total: total,
			};
		}
		default: {
			return state;
		}
	}
};

export { moviesReducer };
