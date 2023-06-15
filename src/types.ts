export interface IButton {
    className: string,
    content: string,
    callback: Function,
    isActive?: boolean;
}

export interface IMovie {
    movieInfo: IMovieInfo,
}

export interface IMovieInfo{
    id: string,
    poster_path: string,
    title: string,
    release_date: string,
    country: string,
	overview: string,
	key: string,
	vote_average:number,
}

export interface MoviesProps {
    data: IMovieInfo[]
}

export interface IUserData {
    username: string,
    password: string,
    email: string,
    id?: number,
}

export interface IAuthorizeData {
	uid: any,
	token: any,
}

export interface ITokens {
	access: string;
	refresh: string;
}

export interface ISignIn {
	email: string;
	password: string;
}

export interface IUserState {
	authorizedUser: IUserData;
	favorites: IMovieInfo[]
}

export interface IStoreState {
	user: IUserState;
	movies: IMoviesState
}

export interface IMovieResponce {
	count: number,
	next : string,
	results: IMovieInfo[],
	popular: IMoviePopular[]
}
export interface IMoviesState {
	movies: IMovieInfo[],
	similarMovies: IMovieInfo[],
	limit: number,
	selectedPost: IMovieInfo,
	searchQuery: IMovieInfo[],
	search: string,
	currentPage: number,
	total: number,
	selectedPopular?: string,
	isLoading: boolean
}

export interface IMoviePopular{
	id: string,
	name:string
}

export interface IMoviePopularData{
	data: IMoviePopular[]
}