"use client";

// import React from 'react'
// import Home from './components/Home'
// import Form from './components/Form'

// const getDetails = async () => {
//   let data = await fetch("http://localhost:3000/api/detail")
//   data = await data.json()
//   return data.result;
// }

// export default async function Page() {
//   const detail = await getDetails();
//   return (
//     <div>
//       <Form/>
//       <Home Fullname={detail[0].fullname} One_Liner={detail[0].oneliner} About={detail[0].about}/>
//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpForm from './components/ExpForm'
import SkillForm from "./components/SkillForm";
import ProjectForm from "./components/ProjectForm";
import { removeExp } from './redux/slice'
import { removeProject } from "./redux/projectSlice";
import { removeSkill } from "./redux/skillSlice";
import Home from "./components/Home";

export default function page() {
  const dispatch = useDispatch();
  const experience = useSelector((data) => data.expData.experience)
  const projects = useSelector((data) => data.projectData.project)
  const skills = useSelector((data) => data.skillData.skill)

  const [user_id, setUser_id] = useState("");
  const [fullName, setFullName] = useState("");
  const [template, setTemplate] = useState("");
  const [workDesc, setWorkDesc] = useState("");
  const [selfDesc, setSelfDesc] = useState("");
  const [cvLink, setCvLink] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [numOfProjects, setNumOfProjects] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [numOfHappyClients, setNumOfHappyClients] = useState("");
  const [totalCustomerReviews, setTotalCustomerReviews] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [location, setLocation] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

    const submitDataToDB = async () => {
      let result = await fetch('http://localhost:3000/api/detail',{
        method: "POST",
        body: JSON.stringify({user_id:user_id,template,fullName,workDesc,selfDesc,cvLink,aboutMe,numOfProjects,yearsOfExperience,numOfHappyClients,totalCustomerReviews,skills,experience,projects,location,email,mobileNumber,facebookLink,githubLink,linkedinLink,twitterLink})
      })
      
      
    };

  let props = {
    fullName,
    workDesc,
    selfDesc,
    cvLink,
    aboutMe,
    numOfProjects,
    yearsOfExperience,
    numOfHappyClients,
    totalCustomerReviews,
    facebookLink,
    githubLink,
    twitterLink,
    linkedinLink,
    location,
    mobileNumber,
    email,
    experience,
    skills,
    projects
  }



  return (
    <div>
      <input
        type="text"
        value={user_id}
        placeholder="User ID"
        onChange={(e) => setUser_id(e.target.value)}
      />
      <input
        type="text"
        value={fullName}
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="text"
        value={template}
        placeholder="Template Name"
        onChange={(e) => setTemplate(e.target.value)}
      />
      <input
        type="text"
        value={workDesc}
        placeholder="Work Description"
        onChange={(e) => setWorkDesc(e.target.value)}
      />
      <input
        type="text"
        value={selfDesc}
        placeholder="Self Description"
        onChange={(e) => setSelfDesc(e.target.value)}
      />
      <input
        type="text"
        value={cvLink}
        placeholder="CV Link"
        onChange={(e) => setCvLink(e.target.value)}
      />
      <input
        type="text"
        value={aboutMe}
        placeholder="About Yourself"
        onChange={(e) => setAboutMe(e.target.value)}
      />
      <input
        type="text"
        value={numOfProjects}
        placeholder="Number of projects you have completed"
        onChange={(e) => setNumOfProjects(e.target.value)}
      />
      <input
        type="text"
        value={yearsOfExperience}
        placeholder="Years of experience"
        onChange={(e) => setYearsOfExperience(e.target.value)}
      />
      <input
        type="text"
        value={numOfHappyClients}
        placeholder="Number of satisfied clients"
        onChange={(e) => setNumOfHappyClients(e.target.value)}
      />
      <input
        type="text"
        value={totalCustomerReviews}
        placeholder="Customer Reviews"
        onChange={(e) => setTotalCustomerReviews(e.target.value)}
      />
      <input
        type="text"
        value={facebookLink}
        placeholder="Facebook link"
        onChange={(e) => setFacebookLink(e.target.value)}
      />
      <input
        type="text"
        value={githubLink}
        placeholder="Github Link"
        onChange={(e) => setGithubLink(e.target.value)}
      />
      <input
        type="text"
        value={twitterLink}
        placeholder="Twitter Link"
        onChange={(e) => setTwitterLink(e.target.value)}
      />
      <input
        type="text"
        value={linkedinLink}
        placeholder="LinkedIn Link"
        onChange={(e) => setLinkedinLink(e.target.value)}
      />
      <input
        type="text"
        value={location}
        placeholder="Enter your location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={mobileNumber}
        placeholder="Give your contact number"
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <ExpForm/>
      <SkillForm/>
      <ProjectForm/>

      {/* <button onClick={submitDataToDB}>Send to DB</button> */}

      <div>
        <h1>Experience Added</h1>
        {experience.map((item) => (
          <div>
            <p>{item.companyName}</p>
            <p>{item.jobTitle}</p>
            <p>{item.jobDescription}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
            <button onClick={() => dispatch(removeExp(item.id))}>Remove</button>
          </div>
        ))}
      </div>

      <div>
        <h1>Projects Added</h1>
        {projects.map((item) => (
          <div>
            <p>{item.image}</p>
            <p>{item.githubLink}</p>
            <p>{item.liveLink}</p>
            <button onClick={() => dispatch(removeProject(item.id))}>Remove</button>
          </div>
        ))}
      </div>

      <div>
        <h1>Skills Added</h1>
        {skills.map((item) => (
          <div>
            <p>{item.name}</p>
            <p>{item.percentage}</p>
            <button onClick={() => dispatch(removeSkill(item.id))}>Remove</button>
          </div>
        ))}
      </div>

      <Home {...props} />

    </div>
  );
}
