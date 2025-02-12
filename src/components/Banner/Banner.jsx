import PropTypes from 'prop-types';

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" className="banner-img" />
      <p className="banner-text"> {title} </p>
    </div>
  );
};

Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;

