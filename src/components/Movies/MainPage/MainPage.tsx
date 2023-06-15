import "./mainPage.css";
import { SelectPopular } from "../PopularMovies/PopularMovies";
import { mockDataPopular } from "../../../constants/constants";
import { Pagination } from "../../Pagination/Pagination";



export const MainPage = () => {
	return (
		<div className="main-container">
			<div className="main-container-select">
				<SelectPopular data={mockDataPopular}/>
			</div>
				<Pagination />
 		</div>
	);
};
