import React from "react";
import Team1 from "../../images/team-1.jpg";
import Team2 from "../../images/team-2.jpg";
import Team3 from "../../images/team-3.jpg";
import { Link } from "react-router-dom";
import {
  TeamContainer,
  TeamH1,
  TeamWrapper,
  TeamCard,
  TeamIcon,
  TeamH2,
  TeamP,
  TeamB,
} from "./TeamElements";

const Team = () => {
  return (
    <TeamContainer id="team">
      <TeamH1>Team</TeamH1>
      <TeamWrapper>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/marcjarrett/" }}
          target="_blank"
        >
          <TeamCard>
            <TeamIcon src={Team1} />
            <TeamH2>Marc Jarrett</TeamH2>
            <TeamP>Managing Director</TeamP>
            <TeamB>
              Marc Jarrett is a Disruptive Game Changing Virtual Power Networker
              who has built an enormous global network of thought leaders and
              entrepreneurs across a diverse range of industries. He spent most
              of his career in telecoms and was first to market with mobile
              ringtones and logos and then launched the world’s first celebrity
              chatline service.
            </TeamB>
          </TeamCard>
        </Link>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/doritmjarrett/" }}
          target="_blank"
        >
          <TeamCard>
            <TeamIcon src={Team2} />
            <TeamH2>Dorit Moshkovitz-Jarrett</TeamH2>
            <TeamP>Secretary/Graphic Designer</TeamP>
            <TeamB>
              After studying Graphic Design at Technion-Israel Institute of
              Technology and Art at Beit Berl College in Tel Aviv, Dorit
              operated an art and design consltancy. An experienced
              multi-tasker, her project management skills are critical to the
              successful execution of more complex projects. As well as being a
              graphic designer & artist, she oversees all administrative tasks.
            </TeamB>
          </TeamCard>
        </Link>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/jamiejarrettjj/" }}
          target="_blank"
        >
          <TeamCard>
            <TeamIcon src={Team3} />
            <TeamH2>Jamie Jarrett</TeamH2>
            <TeamP>Full Stack Web Developer</TeamP>
            <TeamB>
              Jamie is a 20 year old dual national that was born in Hamburg,
              Germany. He began freelance work at the age of 11 and has since
              helped develop several websites, offer consultancy & more. He has
              a good understanding of full-stack web development, from the
              front-end to databases and devops. He even built the website
              you're on right now!
            </TeamB>
          </TeamCard>
        </Link>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
