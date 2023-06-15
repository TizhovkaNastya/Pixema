import { IMoviePopular } from "../types";

export const mockDataPopular: IMoviePopular[] = [
	{ 
        id:'popularity.desc',
        name: "Popular"
        },
	{ 
        id:'popularity.asc',
        name: "No popular"
        },
	{ 
        id:'revenue.desc',
        name: "Revenue up"
        },
	{ 
        id:'revenue.asc',
        name: "Revenue down"
        },
	{ 
        id:'primary_release_date.desc',
        name: "Primar release date up"
        },
	{ 
        id:'primary_release_date.asc',
        name: "Primar release date down"
        },
        { 
        id:'vote_average.asc',
        name: "Vote average  down"
        },
        { 
        id:'vote_average.desc',
        name: "Vote average up"
        },
        { 
        id:'vote_count.asc',
        name: "Vote count down"
        },
        { 
        id:'vote_count.desc',
        name: "Vote count up"
        }
];
