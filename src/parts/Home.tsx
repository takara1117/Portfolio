//footerのインポート
import Footer from "../components/Footer";

//cssのインポート
import "../css/Home.css";

const Home = () => {
  return (
    <div className="wrap">
      <div className="home">
        <p>My Portfolio</p>
        <div className="home_img">
          <p hidden>main背景画像</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
