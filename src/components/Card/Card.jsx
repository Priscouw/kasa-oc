import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ logements }) => {
  return (
    <>
      {logements.map((logement) => (
        <Link to={`/logement/${logement.id}`} key={logement.id}>
          <article className="card">
            <img
              className="card-img"
              src={logement.cover}
              alt={logement.title}
            />
            <p className="card-text">{logement.title}</p>
          </article>
        </Link>
      ))}
    </>
  );
};

Card.propTypes = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
