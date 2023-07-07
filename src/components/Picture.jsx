import "../styles/style.css";

const Picture = ({ pht, src }) => {
  return (
    <div className="container">
      <img className="images" src={src} alt="img" />
      <div>{pht}</div>
    </div>
  );
};

export default Picture;
