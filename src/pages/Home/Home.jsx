import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import AboutUs from "../AboutUs/AboutUs";
import HomeCard from "./HomeCard";
import { useEffect, useState } from "react";
import NotFound from "../../components/NotFound";

const Home = () => {
  const loadedData = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 lg:grid-cols-3">
        {loadedData && Array.isArray(loadedData) ? (
          loadedData.map((item) => <HomeCard key={item} item={item}></HomeCard>)
        ) : (
          <div>
            <p>Sorry, there was an issue loading the data.</p>
            {/* You can add more information or a retry button here */}
          </div>
        )}
      </div>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
