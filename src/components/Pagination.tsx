import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ page, totalPages, goOnePageBack, goOnePageForward }) => {
  return (
    <div className="pagination-container">
      <ul className="pagination-ul">
        <li className="pagination-li">
          <button
            className="pagination-btn"
            disabled={page === 1}
            onClick={goOnePageBack}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </li>
        <li className="pagination-li">
          <span className="pagination-btn">{page}</span>
        </li>
        <li className="pagination-li">
          <button
            className="pagination-btn"
            disabled={page === totalPages}
            onClick={goOnePageForward}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
