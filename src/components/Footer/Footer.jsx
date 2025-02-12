import logoFooter from "../../assets/img/logoFooter.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <img src={logoFooter} alt="logo kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
