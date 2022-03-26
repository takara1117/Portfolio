//footerのインポート
import Footer from "../components/Footer";

//画像のインポート
import me from "../images/me.jpg";

//cssのインポート
import "../css/Profile.css";

function Profile() {
  return (
    <div className="wrap">
      <div className="profile">
        <div className="heading">
          <h1>Profile</h1>
        </div>

        <div className="contents">
          <img
            src={me}
            className="my_image"
            alt="私の写真"
            height="100%"
            width="100%"
          />
          <div className="profile_contents">
            <dl>
              <dt>名前</dt>
              <dd>宝田 雄希</dd>
            </dl>
            <dl>
              <dt>生年月日</dt>
              <dd>1999年7月17日</dd>
            </dl>
            <dl>
              <dt>学校</dt>
              <dd>HAL大阪</dd>
            </dl>
            <dl>
              <dt>専攻</dt>
              <dd>
                高度情報学科 <br />
                WEB開発エンジニア専攻
              </dd>
            </dl>
            <dl>
              <dt>資格</dt>
              <dd>
                基本情報技術者
                <br />
                普通自動車
              </dd>
            </dl>
          </div>
        </div>
        <div className="hidden"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
