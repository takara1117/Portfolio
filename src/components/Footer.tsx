//cssのインポート
import "../css/Footer.css";

//Material-UI ICONのインポート
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="wrap">
      <div className="footer">
        <div className="icon">
          <GitHubIcon
            className="sns_icon"
            onClick={() =>
              window.open("https://github.com/takara1117", "_blank")
            }
          />
          <TwitterIcon
            className="sns_icon"
            onClick={() =>
              window.open("https://twitter.com/takarada0717", "_blank")
            }
          />
          <InstagramIcon
            className="sns_icon"
            onClick={() =>
              window.open("https://www.instagram.com/takarada717/", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
