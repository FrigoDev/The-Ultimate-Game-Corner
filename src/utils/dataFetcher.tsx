import { API_URL, API_KEY, USER_API_URL } from "../constants/constants.jsx";
import {
  RootGameRequest,
  DetailedGameResponse,
} from "../types/gameResponseInterfaces";
import type { Game, DetailedGame } from "../types/Game";
import type { Comment } from "../types/Comment";
export const getGameById = async (id: Number) => {
  try {
    const response = await fetch(`${API_URL}/${id}?key=${API_KEY}`);
    const data: DetailedGameResponse = await response.json();
    return {
      name: data.name,
      image: data.background_image,
      rating: data.rating,
      author: data.developers.map((developer) => developer.name)[0],
      description: data.description_raw,
      platforms: data.parent_platforms.map(
        (platform) => platform.platform.name
      ),
      genres: data.genres.map((genre) => genre.name).slice(0, 2),
      releaseDate: data.released,
    } as DetailedGame;
  } catch (error) {
    return;
  }
};

const dataFetcher = async (actualPage = 1, pageSize = 10, search = "") => {
  try {
    const response = await fetch(
      `${API_URL}?page=${actualPage}&page_size=${pageSize}&search=${search}&key=${API_KEY}`
    );
    const data: RootGameRequest = await response.json();
    return {
      pages: Math.ceil(data.count / pageSize),
      data: data.results.map(
        (game) =>
          ({
            id: game.id,
            name: game.name,
            releaseDate: game.released,
            image: game.background_image,
            rating: game.rating,
            platforms: game.platforms.map((platform) => platform.platform.name),
            genres: game.genres.map((genre) => genre.name).slice(0, 2),
          } as Game)
      ),
    };
  } catch (error) {
    return {
      pages: 0,
      data: [] as Game[],
    };
  }
};

export const getCommentsBygameId = async (id: string) => {
  try {
    const response = await fetch(`${USER_API_URL}/comments?gameId=${id}`);
    return await response.json();
  } catch (error) {
    return [];
  }
};

export const newComment = async (comment: Comment) => {
  try {
    await fetch(`${USER_API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
  } catch (error) {
    alert("An error has occurred, please try again later");
  }
};

export const getUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const response = await fetch(
      `${USER_API_URL}/users?email=${email}&password=${password}`
    );
    return (await response.json())[0];
  } catch (error) {}
};

export const newUser = async (user:{user:string,email:string,password:string}) => {
  
  try {
    await fetch(`${USER_API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    alert("An error has occurred, please try again later");
  }
};
export default dataFetcher;
