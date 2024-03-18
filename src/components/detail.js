import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";


export default function Detail(props) {
   
   const selection = Math.round(Math.random());

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
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
         <div style={{backgroundColor: "rgb(56, 56, 56)", width: "400px", padding: "30px", transform: "translateY(-60px)", display: "flex", flexDirection: "column"}}>
            <img className="mx-auto" style={{width: "100px", borderRadius: "50%", marginBottom: "20px"}} src={dataApi.picture}/>
            <p style={{color: "white"}}><b>{t('userName')}</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {dataApi.username} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={dataApi.username}/>}
            <p style={{color: "white"}}><b>{t('fullNamme')}</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {dataApi.fisrstName} {dataApi.lastName} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={dataApi.fisrstName + " " + dataApi.lastName}/>}
            <p style={{color: "white"}}><b>{t('profileDescription')}</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {dataApi.description} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={dataApi.description}/>}
            <p style={{color: "white"}}><b>{t('url')}</b></p>
            {selection === 0 ? <a href={dataApi. link} > {dataApi.link} </a> : <input type="text" style={{marginBottom: "20px"}} placeholder={dataApi.link}/>}
            {selection === 1 && <button>{t('saveChanges')}</button>}
         </div>
      </div>
   );
}