 
import { IMovie, IStoreState } from "../../../types";
import "./moviecard.css";
import { NavLink } from "react-router-dom";
import { FavoriteIcon } from "../../Icons/FavoriteIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/action-creators/user_action_creators";


export const MovieCard = ({ movieInfo }: IMovie) => {
	const { poster_path, title, vote_average } = movieInfo;

	const favorites = useSelector((state: IStoreState) => state.user.favorites);
  const isFavorite = favorites.find((el) => el.id === movieInfo.id);
	const dispatch = useDispatch();


return (
  <div className="movie-card">
    <div className="movie-favorites"
        onClick={() => dispatch(toggleFavorite(movieInfo))}>
          {isFavorite ? (
            <FavoriteIcon className="favorite-active" />
          ) : (
            <FavoriteIcon className="favorite" />
          )}
    </div>
    <div className='card-container'>
      <NavLink to={`/movie/${movieInfo.id}`}>
          <img
            className="movie-card__image"
            src={`http://image.tmdb.org/t/p/w300${poster_path}`}
            alt="poster of film"
          />
      </NavLink>   
      <div className="movie-info">
        <NavLink
          to={`/movie/${movieInfo.id}`}
          style={{ textDecoration: "none" }}>
          <h3 className="title-card">{title}</h3>
        </NavLink>
        <div className="vote">
          <h3>{vote_average}</h3>
        </div>
      </div>
    </div>
  </div>
	);
};
