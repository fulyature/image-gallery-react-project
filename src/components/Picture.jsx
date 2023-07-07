import "../styles/style.css";

const Picture = ({ pht, src }) => {
  return (
    <div className="photo-wrapper">
      <img className="image" src={src} alt="img" />
      <div className="info">{pht}</div>
    </div>
  );
};

export default Picture;
