import Footer from "../components/Footer";

//画像のインポート
import chat from "../images/chat.png";
import portfolio from "../images/portfolio.png";
import location from "../images/location.png";
import ecsite from "../images/ECsite.png";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import laravel from "../images/laravel.svg";
import vue from "../images/vue.svg";
import react from "../images/react.svg";
import typescript from "../images/typescript.png";
import docker from "../images/docker.jpg";

//cssのインポート
import "../css/Skills.css";

function Skills() {
  return (
    <div className="wrap">
      <div className="skills">
        <div className="heading">
          <h1>Skills</h1>
        </div>

        <div className="skills_contents">
          <div className="first_row">
            <article className="skill_1">
              <img
                src={portfolio}
                className="work"
                alt="portfolioの画像"
                height="100%"
                width="100%"
                onClick={() =>
                  window.open("https://github.com/takara1117", "_blank")
                }
              />
              <h2>Portfolio</h2>
              <p>
                自己紹介サイトが欲しかったのとReactの
                <span className="br">勉強をやりたくて作成しました。</span>
              </p>
              <p>使用言語</p>
              <img
                src={react}
                className="logo_space"
                alt="reactのロゴ"
                height="100px"
                width="100px"
              />
              <img
                src={typescript}
                className="logo_space"
                alt="typescriptのロゴ"
                height="100px"
                width="100px"
              />
              <img
                src={css}
                className="logo_space"
                alt="cssのロゴ"
                height="100px"
                width="100px"
              />
            </article>

            <article className="skill_2">
              <img
                src={chat}
                className="work"
                alt="chatの画像"
                height="100%"
                width="100%"
                onClick={() =>
                  window.open("https://github.com/takara1117/Chat", "_blank")
                }
              />
              <h2>Chat</h2>
              <p>非同期通信をやってみたくて作成しました。</p>
              <p className="language">使用言語</p>
              <img
                src={laravel}
                alt="laravelのロゴ"
                height="100px"
                width="100px"
              />
              <img
                src={vue}
                className="logo_space"
                alt="vueのロゴ"
                height="100px"
                width="100px"
              />
              <img
                src={css}
                className="logo_space"
                alt="cssのロゴ"
                height="100px"
                width="100px"
              />
            </article>
          </div>

          <div className="second_row">
            <article className="skill_3">
              <img
                src={location}
                className="work"
                alt="portfolioの画像"
                height="100%"
                width="100%"
              />
              <h2>位置情報検索</h2>
              <p>
                Google Map APIを利用し位置情報アプリを
                <span className="br">作成しました。</span>
              </p>
              <p>使用言語</p>
              <img
                src={html}
                className="logo_space"
                alt="htmlのロゴ"
                height="100px"
                width="100px"
              />
              <img
                src={css}
                className="logo_space"
                alt="cssのロゴ"
                height="100px"
                width="100px"
              />
              <img
                src={js}
                className="logo_space"
                alt="jsのロゴ"
                height="100px"
                width="100px"
              />
            </article>

            <article className="skill_4">
              <img
                src={ecsite}
                className="work"
                alt="ecsiteの画像"
                height="100%"
                width="100%"
                onClick={() =>
                  window.open("https://github.com/takara1117/KOSHIKI", "_blank")
                }
              />
              <h2>ECサイト</h2>
              <p>インターンで擬似ECサイトを作成しました。</p>
              <p className="language">使用言語</p>
              <img
                src={laravel}
                className="logo_space"
                alt="laravelのロゴ"
                height="100px"
                width="100px"
              />
              <img
                src={js}
                className="logo_space"
                alt="jsのロゴ"
                height="100px"
                width="100px"
              />
              <img
                src={css}
                className="logo_space"
                alt="cssのロゴ"
                height="100px"
                width="100px"
              />
              <img
                src={docker}
                className="logo_space"
                alt="dockerのロゴ"
                height="100px"
                width="100px"
              />
            </article>
          </div>
          <p className="another_work">他の作品はGithubをご覧ください！</p>
        </div>
        <div className="space"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
