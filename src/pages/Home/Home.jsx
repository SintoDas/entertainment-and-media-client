import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import AboutUs from "../AboutUs/AboutUs";
import HomeCard from "./HomeCard";
import { useEffect, useState } from "react";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the function to fetch data
    async function fetchData() {
      try {
        const response = await fetch("./brandCategory.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Banner></Banner>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 lg:grid-cols-3">
        {data.map((item) => (
          <HomeCard key={item} item={item}></HomeCard>
        ))}
      </div>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
