import "../assets/styles/gamesSection.css";
import GameCard from "../components/gameCard";
import useGames from "../hooks/useGames";
import NoContent from "../components/noContent";
import Pagination from "../components/Pagination";
const GamesSection = ({ navigateTo }) => {
  const {
    games,
    page,
    totalPages,
    goOnePageBack,
    goOnePageForward,
    updateFilter
  } = useGames();

  return (
    <main className="games-section">
      <h2 className="games-section-title">Games</h2>
      <div className="search-container">
        <div className="input-group">
          <input
            onInput={(e) => updateFilter(e.target.value.trim())}
            name="search"
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
              redirect={() => navigateTo(`/game/${game.id}`)}
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
