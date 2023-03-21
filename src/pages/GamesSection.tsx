import "../assets/styles/gamesSection.css";
import GameCard from "../components/GameCard";
import useGames from "../hooks/useGames";
import NoContent from "../components/NoContent";
import Pagination from "../components/Pagination";
import type {FormEvent,}  from "react"
import { useNavigate } from "react-router-dom";

const GamesSection = () => {
  const {
    games,
    page,
    totalPages,
    goOnePageBack,
    goOnePageForward,
    updateFilter,
    filter
  } = useGames();
  const navigate = useNavigate(); 
  return (
    <main className="games-section">
      <h2 className="games-section-title">Games</h2>
      <div className="search-container">
        <div className="input-group">
          <input
            onInput={(e:FormEvent<HTMLInputElement>)=> {
              updateFilter(e.currentTarget.value.trim())
            }}
            name="search"
            value={filter}
            className="form-input"
            autoComplete="off"
            type="text"
            id="input-search"
            placeholder=" "
          />
          <label className="form-label" htmlFor="search">
            Search
          </label>
        </div>
      </div>
      <div className="games-section-container">
        <div className="games-section-row">
          {games.map((game) => (
            <GameCard
              key={game.id}
              {...game}
              redirect = {() => navigate(`/game/${game.id}`)}
            />
          ))}
          {games.length === 0
            ? (
              <NoContent text="We apologize, but we were unable to find what you were looking for 😢" />
            )
            : null}
        </div>
      </div>
      {games.length > 0
        ? (
          <Pagination page={page} totalPages={totalPages} goOnePageBack={goOnePageBack} goOnePageForward={goOnePageForward} />
        )
        : null}
    </main>
  );
};
export default GamesSection;
