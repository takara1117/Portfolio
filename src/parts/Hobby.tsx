//footerのインポート
import Footer from "../components/Footer";

//画像のインポート
import soccer from "../images/soccer.jpeg";
import tarttatin from "../images/tarttatin.jpg";

//cssのインポート
import "../css/Hobby.css";

function Hobby() {
  return (
    <div className="wrap">
      <div className="hobby">
        <div className="heading">
          <h1>Hobby</h1>
        </div>
        <div className="hobby_contents">
          <div className="hobby_soccer">
            <h2>サッカー</h2>
            <div className="soccer_contents">
              <img
                src={soccer}
                className="soccer_image"
                alt="サッカーの写真"
                height="100%"
                width="100%"
              />
              <p>
                小学1年生から高校3年生までの12年間やっていました。
                <br />
                ポジションはボランチ・トップ下で現在も年に数回
                <span className="br">
                  友達とコートを借りてプレーしています。
                </span>
                <br />
                とても楽しいのでオススメのスポーツです！！
              </p>
            </div>
          </div>
          <div className="hobby_cooking">
            <h2>料理</h2>
            <div className="cooking_contents">
              <p>
                小さい頃からよくお婆ちゃんの料理を手伝っていました。
                <br />
                その頃の習慣が今では趣味になり昼ごはん、夜ごはんを
                <span className="br">作っています。</span>
                <br />
                最近はお菓子作りも始めました！
              </p>
              <img
                src={tarttatin}
                className="cooking_image"
                alt="タルトタタンの写真"
                height="100%"
                width="100%"
              />
            </div>
          </div>
        </div>
        <div className="hidden"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Hobby;
