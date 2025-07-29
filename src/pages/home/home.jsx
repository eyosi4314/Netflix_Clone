import "./home.css";
import Header from "../../components/header/header";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/Footer";
import Rowlist from "../../components/Rows/Rowlist/rowlist";

function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Rowlist/>
      <Footer />
    </>
  );
}

export default Home;
