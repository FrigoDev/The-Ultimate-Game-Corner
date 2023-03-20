import dataFetcher, {
  getGameById,
  getCommentsBygameId,
  newComment,
  getUserByEmailAndPassword,
} from "../utils/dataFetcher";
import type { Comment } from "../types/Comment";
const getGame = async (id: number) => {
  return await getGameById(id);
};

const getGames = async (page = 1, limit = 10, filter = "") => {
  const { pages, data } = await dataFetcher(page, limit, filter);
  return {
    totalPages: pages,
    games: data,
  };
};
const getComments = async (gameId: string) => {
  return await getCommentsBygameId(gameId);
};

const addComment = async (comment: Comment) => {
  await newComment(comment);
};

const getSession = async () => {
  const session = localStorage.getItem("session");
  if (session) {
    return JSON.parse(session);
  } else return undefined;
};
const loginSession = async (email: string, password: string) => {
  const user = await getUserByEmailAndPassword(email, password);
  if (user) localStorage.setItem("session", JSON.stringify(user));
  return user;
};
export { getGames, getGame, getComments, addComment, getSession, loginSession };

export default getGames;
