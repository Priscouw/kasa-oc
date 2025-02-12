import { useParams } from "react-router-dom";

import Carrousel from "../../components/Carrousel/Carrousel";
import Tagname from "../../components/Tagname/Tagname";
import Topbar from "../../components/Topbar/Topbar";
import Erreur from "../Erreur/Erreur";

import redStar from "../../assets/icons/red-star.svg";
import greyStar from "../../assets/icons/grey-star.svg";

import data from "../../data/logements.json";

const findLogementID = (id) => {
  return data.find((logement) => logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findLogementID(id);

  const rating = [1, 2, 3, 4, 5];

  if (logement) {
    return (
      <div>
        <Carrousel carrouselImg={logement.pictures} />

        {/* Informations logements */}

        <div className="logement_infos_container">
          <div className="logement_infos">
            <h1 className="logement_infos-title">{logement.title}</h1>
            <p className="logement_infos-location">{logement.location}</p>

            <Tagname tagnames={logement.tags} />
          </div>
          {/* Informations host et note*/}

          <div className="rating-host">
            <div className="rating_container">
              {rating.map((index) => (
                <img
                  key={index}
                  src={index <= logement.rating ? redStar : greyStar}
                  alt={
                    index <= logement.rating ? "étoile rempli" : "étoile vide"
                  }
                />
              ))}
            </div>

            <div className="host_information">
              <p className="host_information-name">{logement.host.name}</p>
              <img
                className="host_information-img"
                src={logement.host.picture}
                alt={"Photo de " + logement.host.name}
              />
            </div>
          </div>
        </div>

        {/* Description et équipements des logements */}
        <div className="containerLogementTopbar">
          <Topbar
            topbarTitle="Description"
            topbarContent={logement.description}
          />
          <Topbar
            topbarTitle="Équipements"
            topbarContent={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    );
  }
  return <Erreur />;
};

export default Logement;
