import { useEffect } from "react";
import { IStoreState } from "../../../types";
import {  useNavigate, useParams } from "react-router-dom";
import "./moviePage.css";
import { useDispatch, useSelector } from "react-redux";
import {loadSelectedPost} from "../../../redux/action-creators/movie_action_creators";


export const SelectedMovie = () => {
	const { movieId } = useParams<{ movieId: string }>();
	const movieArr = useSelector(
		(state: IStoreState) => state.movies.selectedPost
	);
	const navigate = useNavigate();
 
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadSelectedPost(movieId!));
	}, [navigate]);

	return (
		<div key={movieId} className="container">
			<div key={movieId} className="selected-movie-container">
				<img className="selected-movie-image"
				 src={`http://image.tmdb.org/t/p/w300${movieArr.poster_path}`}
				 alt="logo"
			 	/>
				<div>
					<h1 className="title">{ movieArr.title}</h1>
					<h6 className="subtitle">{ movieArr.release_date}</h6>
					<p className="description">
						{movieArr.vote_average}
					</p>
					<ul className="params">
						<li><span className="label">Описание</span>{ movieArr.overview}</li>
						<li><span className="label">Дата выпуска </span>{movieArr.release_date}</li>
						<li><span className="label">Страна</span>{ movieArr.country}</li>					
					</ul>
				</div>
				<div>
					<span className="rathing-main">{movieArr.vote_average}</span>
				</div>
			</div>
		</div>
	);
};
