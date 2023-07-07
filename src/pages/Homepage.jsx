import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  return (
    <div className="App">
      <h1 className="">Image Galery</h1>
      {data.map((data) => {
        const { photographer, src } = data;
        return (
          <>
            <Picture pht={photographer} src={src.large} />
          </>
        );
      })}
    </div>
  );
};

export default Homepage;
