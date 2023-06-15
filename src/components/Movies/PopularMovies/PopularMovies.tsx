import { FC, useState } from "react";
import { IMoviePopularData } from "../../../types";
import { useDispatch } from "react-redux";
import { setCurrentPage, setSelectedPopular } from "../../../redux/action-creators/movie_action_creators";
import './popularMovies.css'

export const SelectPopular: FC<IMoviePopularData> = ({ data }) => {
    const [selects, setSelects] = useState('')
    const dispatch = useDispatch()
 
    const onChange = (e: any) => {
        console.log(e.target.value)
        setSelects(e.target.value)
        dispatch(setSelectedPopular(e.target.value))
        dispatch(setCurrentPage(1))
    }
    return (
        (<div className="select-wrapper">
            <select value={selects} className="select" onChange={onChange}>
                <option className="select-item">
                    Select Popular Movies
                </option>
                {data.map((el) => <option value={el.id} className="select-item">{el.name}</option>)}
            </select>
        </div>)
    );
};
 
 