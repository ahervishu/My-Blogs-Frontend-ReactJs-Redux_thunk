import { About } from "./About/About";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
import { Setting } from "./Setting/Setting";
import axios from "axios";

const Profile = () => {
  const [personalinfo, setPersonalInfo] = useState(true);
  const [about, setAbout] = useState(false);
  const [setting, setSetting] = useState(false);
  const [userData, setUserData] = useState();
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:2023/profile/personal-info/${params.username}`)
      .then((res) => setUserData(res.data));
  }, []);
  if (!userData) return null;
  console.log("params-->", params);
  console.log("userdata-->,", userData);
  userData.map((user) => {
    console.log(user.username);
  });
  console.log("data-->", userData);

  return (
    <div className={styles.container}>
      <ProfileNavbar
        setInfo={setPersonalInfo}
        setAbout={setAbout}
        setSetting={setSetting}
      />
      {personalinfo ? (
        <PersonalInfo userData={userData} />
      ) : about ? (
        <About />
      ) : setting ? (
        <Setting />
      ) : (
        "null"
      )}
    </div>
  );
};

export default Profile;
