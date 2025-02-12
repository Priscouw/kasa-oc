import Banner from "../../components/Banner/Banner";
import Topbar from "../../components/Topbar/Topbar";

import { aProposList } from "../../data/aProposList";

import imgBannerApropos from "../../assets/img/bannerAboutPage.png";

const Apropos = () => {
  return (
    <>
      <Banner imageUrl={imgBannerApropos} title="" />
      <div className="topbarAproposContainer">
        {aProposList.map((topbar) => (
          <Topbar
            key={topbar.title}
            topbarTitle={topbar.title}
            topbarContent={topbar.content}
          />
        ))}
      </div>
    </>
  );
};

export default Apropos;
