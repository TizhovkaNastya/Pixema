import { useSelector } from "react-redux";
import { IStoreState } from "../../../types";
import { MovieCard } from "../MovieCard/MovieCard";
import './favorite.css'


export const FavoriteMovies = () => {
    const data = useSelector((state: IStoreState) =>  state.user.favorites)
   
    return (<div className="favorite-container">

        {data.length ? data.map((el) => <MovieCard movieInfo={el}/>): <p className="not-favorite">Sorry, but you don't have favorite movies</p>}
    </div> );
}
 
