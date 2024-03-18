import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function ProfileHeader() {

  const { t, i18n } = useTranslation();

  const [dataApi, setDataApi] = useState({});

  const fetchUser = () => {
    const URL1 =
      "https://raw.githubusercontent.com/sfrancop/parcial-1-programacion-con-tecnologias-web/main/src/data.json";
    fetch(URL1)
      .then((data) => data.json())
      .then((data) => {
        setDataApi(data[0]);
      });
  }

  useEffect(() => {
    fetchUser();
    const lng = navigator.language;
    i18n.changeLanguage(lng);


  }, []);

  return (
    <header className="row wrapper">
      <Link to={"/perfil"} className="col-sm-4">
        <img className="info-container__picture" src={dataApi.picture} alt="profile-picture" />
      </Link>
      <div className="col-sm-8 info-container__description-container">
        <h1>{dataApi.username}</h1>
        <p><b>{dataApi.fisrstName} {dataApi.lastName}</b></p>
        <p>{dataApi.description}</p>
        <a href={dataApi.link} target="_blanck">{dataApi.link}</a>
        <div style={{ marginTop: "30px" }} className="row">
          <p className="col-sm"><b>{dataApi.posts}</b> {t('posts')} </p>
          <p className="col-sm"><b>{dataApi.followers}</b> {t('followers')} </p>
          <p className="col-sm"><b>{dataApi.following}</b> {t('following')} </p>
        </div>
      </div>

    </header>
  )
}