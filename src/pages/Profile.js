import React from "react";
import classes from "../styles/Profile.module.scss";
import ProfileNavbar from "../components/ProfileNavbar";
import Image from "next/image";
import userimg from "../images/userimg.png";
import Js from "../images/icons8-javascript.gif";
const addItem = [
  {
    id: 1,
    title: "Add Experience + ",
  },
  {
    id: 2,
    title: "Add Language + ",
  },
  {
    id: 3,
    title: "Add Education + ",
  },
];
const contactPart = [
  {
    id: 1,
    p1: "Date of birth (day/month/year)",
    p2: "05/08/2004",
  },
  {
    id: 2,
    p1: "E-mail",
    p2: "gulhayoarabova@gmail.com",
  },
  {
    id: 3,
    p1: "Phone number",
    p2: "+99899 091 30 21",
  },
];
const skillsImg = [
  {
    id: 1,
    img: Js,
    txt: "Javascript",
  },
  {
    id: 2,
    img: Js,
    txt: "Robotics",
  },
  {
    id: 3,
    img: Js,
    txt: "Cyber Security",
  },
  {
    id: 4,
    img: Js,
    txt: "Reactjs",
  },
  {
    id: 5,
    img: Js,
    txt: "Angular",
  },
  {
    id: 6,
    img: Js,
    txt: "Python",
  },
  {
    id: 7,
    img: Js,
    txt: "Vuejs",
  },
  {
    id: 8,
    img: Js,
    txt: "Php",
  },
];
const Profile = () => {
  return (
    <div className={classes.profile_wrapper}>
      <ProfileNavbar />
      <div className={classes.container}>
        <div className={classes.add_section}>
          {addItem.map((el, id) => (
            <div className={classes.add_item} key={id}>
              <p>{el.title}</p>
            </div>
          ))}
        </div>
        <div className={classes.main_profile}>
          <div className={classes.top_part}>
            <button>Preview Application</button>
            <button>Download Resume</button>
            <button>Edit</button>
          </div>
          <div className={classes.bottom_part}>
            <div className={classes.img_part}>
              <Image src={userimg} alt="" />
              <ul>
                <li>Gulhayo Arabova</li>
                <li>Tashkent, Uzbekistan</li>
              </ul>
            </div>
            <div className={classes.contact_wrapper}>
              {contactPart.map((item, id) => (
                <div className={classes.contact_part} key={id}>
                  <small>{item.p1}</small>
                  <p>{item.p2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.skills}>
                {skillsImg.map((item, id) => (
                  <div className={classes.skill_item} key={id}>
                    <Image src={item.img} alt="" width={50} height={50} />
                    <p>{item.txt}</p>
                  </div>
                ))}
              </div>
      </div>
    </div>
  );
};

export default Profile;
