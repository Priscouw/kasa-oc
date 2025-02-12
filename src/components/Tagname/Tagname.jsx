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

export default Tagname;
