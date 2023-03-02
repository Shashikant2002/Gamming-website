import React from 'react';
import TeamCard from '../Cards/TeamCard';
import Heading from '../heading/Heading';
import './team.css';

const OurTeam = () => {
  return (
    <>
      <div className="ourTeam commonSection">
        <div className="container">
          <Heading description = {"OUR TEAM MEMBER"} title={"ACTIVE TEAM MEMBERS"} />

          <div className="taamCard flex justifyCenter flexWrap">
            <TeamCard img={"assets/img/team01.png"} name={"KILLER MASTER"} title={"Blockchain Expert"} />
            <TeamCard img={"assets/img/team02.png"} name={"TANU MARK"} title={"Developer"} />
            <TeamCard img={"assets/img/team03.png"} name={"THOMPSON SCOT"} title={"Art Director"} />
            <TeamCard img={"assets/img/team04.png"} name={"SHAKH DANIAL"} title={"Crypto Advisor"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam