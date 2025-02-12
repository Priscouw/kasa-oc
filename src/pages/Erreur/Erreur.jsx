import { Link } from "react-router-dom";

const Erreur = () => {
  return (
    <>
      <div className="error404">
        <h1 className="error404-title">404</h1>
        <p className="error404-text">
          Oups! La page que <br /> vous demandez n&apos;existe pas.
        </p>
        <Link to={`/`} className="error404-link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
};

export default Erreur;
