import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";;
import { IStoreState } from "./types";
import { useSelector } from "react-redux";
import { MainPage } from "./components/Movies/MainPage/MainPage";
import { SelectedMovie } from "./components/Movies/MoviePage/MoviePage";
import { FavoriteMovies } from "./components/Movies/FavoriteMovies/FavoriteMovies";
import { SignUp } from "./components/Signs/SignUp/SignUp";
import { SignIn } from "./components/Signs/SignIn/SignIn";
import { SignUpActivation } from "./components/Signs/SignUpActivation/SignUpActivation";

function App() {
	const authorizedUser = useSelector((state: IStoreState) => state.user.authorizedUser);
	
	return (
		<div className="App">
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" element={<MainPage /> } />
					<Route path="/movie">
						<Route path=":movieId" element={<SelectedMovie />} />
					</Route>
						<Route path="favorites" element={ <FavoriteMovies /> } />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="activate/:uid/:token" element={<SignUpActivation />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
