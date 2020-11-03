import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const SocialNetwork = () => {
  return (
    <div className="socialNetwork">
      <ul>
        <li>
          <a
            href="https://www.google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sebastien-aggoune/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sebastien-aggoune/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
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
