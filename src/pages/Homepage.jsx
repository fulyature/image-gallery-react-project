import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  return (
    <div className="App">
      <h1 className="">Image Galery</h1>
      <div className="container">
        {data.map((data) => {
          const { photographer, src } = data;
          return <Picture pht={photographer} src={src.large} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
