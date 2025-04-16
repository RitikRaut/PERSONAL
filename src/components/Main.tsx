import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import RitikImage from '../assets/images/Ritik.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={RitikImage} alt="Ritik Raut" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/RitikRaut" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ritik-raut-b2922a1a4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ritik Raut</h1>
          <p>Data Analyst / Data Engineer </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/RitikRaut" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ritik-raut-b2922a1a4/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;