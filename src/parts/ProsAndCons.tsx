//footerのインポート
import Footer from "../components/Footer";

//cssのインポート
import "../css/ProsAndCons.css";

function ProsAndCons() {
  return (
    <div className="wrap">
      <div className="pros_and_cons">
        <div className="heading">
          <h1>Pros And Cons</h1>
        </div>

        <div className="pros_and_cons_contents">
          <div className="strong_points">
            <h2>Strong Points</h2>
            <p>
              周囲に気配りができ外交性が高く人とコニュニケーションを取ることが好きで
              <span className="br">
                よく友達と旅行に行ったりサッカーをしています。
              </span>
              <br />
              また一度取り組んだことを途中で辞めるのが嫌いで、最後までやり切る力を持っています。
              <br />
              この継続力はサッカーを12年間やっていたことで培うことが出来ました。
            </p>
          </div>

          <div className="weak_points">
            <h2>Weak Points</h2>
            <p>
              もの凄くマイペースで物事を取り組むまでのスイッチの入りが遅いです。
              <br />
              ただ、スイッチが入ると周りが見えなくなるほど熱中し物事に取り組むことが出来ます。
            </p>
          </div>
        </div>
        <div className="hidden"></div>
        <Footer />
      </div>
    </div>
  );
}

export default ProsAndCons;
