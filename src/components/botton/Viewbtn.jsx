import "./Viewbtn.css";

const Viewbtn = ({ text, link }) => {
  return (
    <a
      href={`${link}`}
      target="_blank"
      rel="noopener"
      className="viewbtn"
    >
      {text}
      <i className="fa-solid fa-arrow-right"></i>
    </a>
  );
};

export default Viewbtn;
