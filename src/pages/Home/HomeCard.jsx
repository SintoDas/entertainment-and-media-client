const HomeCard = ({ item }) => {
  const { brandName, img } = item;
  // Disney, Netflix, Warner Bros, Sony Pictures, Spotify, Time Warner,
  return (
    <div>
      <div className="py-5 ">
        <div className="relative w-full flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative">
            <img src={img} alt="Image" className="w-full h-[300px]" />
            <div className="absolute w-full -mt-20 py-5 px-3 bg-black bg-opacity-50">
              <button className=" top-10 left-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {brandName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
