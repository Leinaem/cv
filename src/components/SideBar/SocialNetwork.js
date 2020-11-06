import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const SocialNetwork = () => {
  return (
    <div className="socialNetwork">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sebastien-aggoune/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/seb.agoun"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon fontSize="large" className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Leinaem/cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" className="icon" />
          </a>
        </li>
      </ul>
      <div className="signature">
        <p>Sébastien AGGOUNE - 2020</p>
      </div>
    </div>
  );
};

export default SocialNetwork;
