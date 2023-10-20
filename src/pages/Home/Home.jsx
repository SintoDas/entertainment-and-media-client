import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import AboutUs from "../AboutUs/AboutUs";
import HomeCard from "./HomeCard";

const Home = () => {
  const loadedData = useLoaderData();
  return (
    <div>
      <Banner></Banner>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-y  lg:grid-cols-3">
        {loadedData.map((item) => (
          <HomeCard key={item} item={item}></HomeCard>
        ))}
      </div>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
