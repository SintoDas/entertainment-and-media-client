import { Link } from "react-router-dom";

const HomeCard = ({ item }) => {
  const { brandName, imageUrl } = item;
  const handleProduct = (brand) => {
    fetch(`http://localhost:5000/media/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  // Disney, Netflix, Warner Bros, Sony Pictures, Spotify, Time Warner,
  return (
    <div>
      <div className="py-5 ">
        <div className="relative w-full flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative">
            <img src={imageUrl} alt="Image" className="w-full h-[300px]" />
            <div className="absolute w-full -mt-20 py-5 px-3 bg-black bg-opacity-50">
              <Link to={`/media/${item.brandName}`}>
                <button
                  onClick={() => handleProduct(item.brandName)}
                  className=" top-10 left-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {brandName}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
