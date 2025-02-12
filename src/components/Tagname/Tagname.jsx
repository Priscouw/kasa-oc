import propTypes from "prop-types";

const Tagname = ({ tagnames }) => {
  return (
    <ul className="tagnamesContainer">
      {tagnames.map((tagname, index) => (
        <li className="tagname" key={`${tagname}-${index}`}>
          {tagname}
        </li>
      ))}
    </ul>
  );
};

Tagname.propTypes = {
  tagnames: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Tagname;
