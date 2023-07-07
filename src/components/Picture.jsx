import "../styles/style.css";

const Picture = ({ pht, src }) => {
  return (
    <div className="photo-wrapper">
      <div className="image-container">
        <img className="image" src={src} alt="img" />
      </div>
      <div className="info">{pht}</div>
    </div>
  );
};

export default Picture;
