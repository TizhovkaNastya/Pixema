 import { put, takeEvery } from "redux-saga/effects";
import {
	LOAD_MOVIE,
	LOAD_SELECTED_MOVIE,
	SET_CURRENT_PAGE,
	SET_MOVIE,
	SET_SELECTED_MOVIE,
	SET_TOTAL,
	SET_LOADING,
	SET_SELECTED_POPULAR,
} from "../action-types/movie_action_types";
import {IMovieInfo, IMovieResponce} from "../../types";
 

const loadMovie = (searchInfo: any) => ({
	type: LOAD_MOVIE,
	searchInfo,
});

const setMovie = (movies: IMovieInfo[]) =>
	({
		type: SET_MOVIE,
		movies,
	} as const);

const loadSelectedPost = (id: string) => ({
	type: LOAD_SELECTED_MOVIE,
	id,
});

const setSelectedMovie = (movie: IMovieInfo) =>
	({
		type: SET_SELECTED_MOVIE,
		selectedPost: {
			movie,
		},
	} as const);

const setCurrentPage = (currentPage: number) =>
	({
		type: SET_CURRENT_PAGE,
		currentPage,
	} as const);

const setTotal = (total: number) =>
	({
		type: SET_TOTAL,
		total,
	} as const);

const setSelectedPopular = (popular?: string) => ({
	type: SET_SELECTED_POPULAR,
	payload: popular,
} as const)

	
const setLoading= (isLoading: boolean) =>
	({
		type: SET_LOADING,
		isLoading,
	} as const);


// function* fetchSimilarMovies(action: any) {
// 	const options = {
// 		method: "GET",
// 		headers: {
// 			accept: "application/json",
// 			Authorization:
// 				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTkzNzkzNzBhNzI5MGUxY2RmODU2M2FiNDM5MmNhZSIsInN1YiI6IjY0NzhkNGZmMDc2Y2U4MDE0OWVlMGY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ozBkGArwc15buujGc4hQO1O_qt2z_H9A6tKQXrAhKFM",
// 		},
// 	};
// 	const { movieId } = action;

// 	const resp: Response = yield fetch(
// 		`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
// 		options
// 	);

// 	const data: IMovieResponce = yield resp.json();
// 	yield put(setSimilarMovie(data.results));
// }

function* fetchMovies(action: any) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTkzNzkzNzBhNzI5MGUxY2RmODU2M2FiNDM5MmNhZSIsInN1YiI6IjY0NzhkNGZmMDc2Y2U4MDE0OWVlMGY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ozBkGArwc15buujGc4hQO1O_qt2z_H9A6tKQXrAhKFM",
		},
    };
	const { currentPage, popular } = action.searchInfo;
    
    const pages = currentPage ? `&page=${currentPage}` : ''
	const populars = popular ? `&sort_by=${popular}` : ''
 
    yield put(setLoading(true));
	const resp: Response = yield fetch(
		`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US${pages}${populars}`,
		options
	);
	const data: IMovieResponce = yield resp.json();
 
	
	yield put(setMovie(data.results));
	yield put(setTotal(data.count));
    yield put(setLoading(false));
}

function* fetchSelectedMovies(action: any) {
	const { id } = action;
	const resp: Response = yield fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=999a6b21653bde94dc6210ec8ddb42d6`
	);
	const data: IMovieInfo = yield resp.json();
	yield put(setSelectedMovie(data));
}

function* watcherMovie() {
	yield takeEvery(LOAD_MOVIE, fetchMovies);
	yield takeEvery(LOAD_SELECTED_MOVIE, fetchSelectedMovies);
}

export {
	loadMovie,
	setMovie,
	watcherMovie,
	loadSelectedPost,
	setSelectedMovie,
	setCurrentPage,
	setTotal,
	setLoading,
	setSelectedPopular,
};
