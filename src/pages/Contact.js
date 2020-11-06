import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const Contact = () => {
  return (
    <div className="contact">
      <div className="content">
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <LocationOnIcon fontSize="large" className="icon" />{" "}
              <span>77 000 Melun</span>
            </li>
            <li>
              <PhoneAndroidIcon fontSize="large" className="icon" />
              <span className="CopyPhone">06-32-51-81-88</span>
              <CopyToClipboard text="0632518188">
                <button>copie</button>
              </CopyToClipboard>
            </li>
            <li>
              <MailOutlineIcon fontSize="large" className="icon" />
              <span className="CopyMail">sebastien.aggoune@gmail.com</span>
              <CopyToClipboard text="sebastien.aggoune@gmail.com">
                <button>copie</button>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <a
            href="https://www.linkedin.com/in/sebastien-aggoune/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>LinkedIn</span>
            <LinkedInIcon fontSize="large" className="icon" />
          </a>

          <a
            href="https://www.facebook.com/seb.agoun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Facebook</span>
            <FacebookIcon fontSize="large" className="icon" />
          </a>

          <a
            href="https://github.com/Leinaem/cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <GitHubIcon fontSize="large" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
