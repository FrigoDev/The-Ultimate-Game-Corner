export interface Game {
    id: number;
    name: string;
    releaseDate: string;
    image: string;
    rating: number;
    platforms: string[];
    genres: string[];
}

export interface DetailedGame{
    name: string;
    releaseDate: string;
    image: string;
    rating: number;
    author: undefined|string 
    platforms: string[];
    genres: string[];
    description: string;
}
