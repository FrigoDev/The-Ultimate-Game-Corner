import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faCalendarDay
} from "@fortawesome/free-solid-svg-icons";

const GameCard = ({
  name,
  image,
  releaseDate,
  genres,
  redirect
}) => {
  return (
    <div className="column">
      <div className="card" onClick={redirect}>
        <img className="card-image" src={image} alt={name} />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
        </div>
        <div className="card-footer">
          <ul className="card-footer-list">
            <li className="card-footer-item">
              <FontAwesomeIcon className="card-footer-icon" icon={faTags} />
              {genres.join(", ")}
            </li>
            <li className="card-footer-item">
              <FontAwesomeIcon
                className="card-footer-icon"
                icon={faCalendarDay}
              />
              {releaseDate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
