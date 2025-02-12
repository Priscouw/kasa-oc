import arrowUp from "../../assets/icons/arrow-up.svg";
import PropTypes from "prop-types";
import { useState } from "react";

const Topbar = ({ topbarTitle, topbarContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleArrowClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topbar">
      <div className="topbar-header">
        <h2 className="topbar-header-title">{topbarTitle}</h2>
        <img
          src={arrowUp}
          alt="flèche"
          className={`angle-up ${isOpen ? "rotateAngle-up" : ""}`}
          onClick={handleArrowClick}
        />
      </div>
      <div className={`topbar-content ${isOpen ? "showTopbar-content" : ""}`}>
        {topbarContent}
      </div>
    </div>
  );
};

Topbar.propTypes = {
  topbarTitle: PropTypes.string.isRequired,
  topbarContent: PropTypes.node.isRequired,
};

export default Topbar;
