import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import data from "../../data/logements.json";
import imgBannerAccueil from "../../assets/img/bannerHomePage.png";

const Accueil = () => {
  return (
    <>
      <Banner
        imageUrl={imgBannerAccueil}
        title="Chez vous, partout et ailleurs"
      />
      <div className="cardContainer">
        <Card logements={data} />
      </div>
    </>
  );
};

export default Accueil;
