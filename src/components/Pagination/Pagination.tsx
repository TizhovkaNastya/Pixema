import {  useEffect } from "react";
import {  IStoreState  } from "../../types";
import { MovieCard } from "../Movies/MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMovie, setCurrentPage } from "../../redux/action-creators/movie_action_creators";
import { Button } from "../Button/Button";
import './pagination.css';

export const Pagination = () => { 
     const limit = useSelector((state: IStoreState) => state.movies.limit);
     const total = useSelector((state: IStoreState) => state.movies.total);
     const currentPage = useSelector((state: IStoreState) => state.movies.currentPage);
     const popular = useSelector((state: IStoreState) => state.movies.selectedPopular);
     const pagesCount = Math.ceil(total / limit);
     const loading = useSelector((state: IStoreState) => state.movies.isLoading);
     const data = useSelector((state: IStoreState) => state.movies.movies);
   
     const dispatch = useDispatch();
     useEffect(() => {
     dispatch(loadMovie({ limit, currentPage, total, popular }))
     }, [limit, currentPage, total, popular]);

     return (
     <div className="pagin">
          <div className="cards-main-container">
               {!loading? data.map((el )=> <MovieCard movieInfo={el} />):<></>}

          </div>
          <div className="main-pagin">
          <Button className={"button"} content={"❮"} isActive={currentPage === 1} callback={() => { dispatch(setCurrentPage(currentPage - 1)) }} />
          <div className="main-current-page">
          <h2>            
               {currentPage}
          </h2>
          </div>
          <Button className={"button"} content={"❯"} isActive={pagesCount === currentPage} callback={()=> {dispatch(setCurrentPage(currentPage + 1))}}/>
          </div>    
     </div >
     );
}