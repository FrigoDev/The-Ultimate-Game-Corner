import "../assets/styles/gameDescription.css";
import "../assets/styles/mediaquerys.css";
import { getGame } from "../utils/dbSocket";
import Comments from "../components/Comments";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTags,
  faCalendarDay,
  faGamepad,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { DetailedGame } from "../types/Game";
import { User } from "../types/user";
import { useParams } from "react-router-dom";

const GameDescription = ({ user }: { user: User | undefined }) => {
  const [game, setGame] = useState<DetailedGame | undefined>(undefined);
  const { gameId: id } = useParams<{ gameId: string }>();

  const updateGame = async () => {
    setGame(await getGame(Number(id)));
  };

  useEffect(() => {
    updateGame();
  }, [id]);

  if (!game) {
    return (
      <main className="detail-section">
        <div className="games-section-container">
          <h2 className="game-title">Loading...</h2>
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-section">
      <div className="games-section-container">
        <h2 className="game-title">{game.name}</h2>
        <div className="game-image-container">
          <img className="game-image" src={game.image} alt={game.name} />
        </div>
        <div className="image-footer">
          <div className="rating-container">
            <FontAwesomeIcon className="game-info-icon" icon={faStar} />
            <span className="game-info-value">{game.rating}</span>
          </div>
          <div className="platform-container">
            <FontAwesomeIcon className="game-info-icon" icon={faUser} />
            <span className="game-info-value">{game.author}</span>
          </div>
        </div>
        <div className="game-info">
          <p className="game-description">{game.description}</p>
          <ul className="game-info-list">
            <li className="game-info-item">
              <FontAwesomeIcon className="game-info-icon" icon={faGamepad} />
              <span className="game-info-title">Platforms: </span>
              <span className="game-info-value">
                {game.platforms.join(", ")}
              </span>
            </li>
            <li className="game-info-item">
              <FontAwesomeIcon className="game-info-icon" icon={faTags} />
              <span className="game-info-title">Genre: </span>
              <span className="game-info-value">{game.genres.join(", ")}</span>
            </li>
            <li className="game-info-item">
              <FontAwesomeIcon
                className="game-info-icon"
                icon={faCalendarDay}
              />
              <span className="game-info-title">Release Date: </span>
              <span className="game-info-value">{game.releaseDate}</span>
            </li>
          </ul>
        </div>
        <Comments gameId={Number.parseInt(id as string)} sessionUser={user} />
      </div>
    </main>
  );
};

export default GameDescription;
