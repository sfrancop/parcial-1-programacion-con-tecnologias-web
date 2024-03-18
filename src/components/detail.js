import { useTranslation } from "react-i18next";
import { useEffect } from "react";


export default function Detail(props) {
   
   const selection = Math.round(Math.random());

   const { t, i18n } = useTranslation();

   useEffect(() => {
      const lng = navigator.language;
      i18n.changeLanguage(lng);
   }, []);

   return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
         <div style={{backgroundColor: "rgb(56, 56, 56)", width: "400px", padding: "30px", transform: "translateY(-60px)", display: "flex", flexDirection: "column"}}>
            <img className="mx-auto" style={{width: "100px", borderRadius: "50%", marginBottom: "20px"}} src={props.data[0].picture}/>
            <p style={{color: "white"}}><b>{t('userName')}</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {props.data[0].username} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={props.data[0].username}/>}
            <p style={{color: "white"}}><b>{t('fullNamme')}</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {props.data[0].fisrstName} {props.data[0].lastName} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={props.data[0].fisrstName + " " + props.data[0].lastName}/>}
            <p style={{color: "white"}}><b>{t('profileDescription')}</b></p>
            {selection === 0 ? <p style={{color: "white"}}> {props.data[0].description} </p> : <input type="text" style={{marginBottom: "20px"}} placeholder={props.data[0].description}/>}
            <p style={{color: "white"}}><b>{t('url')}</b></p>
            {selection === 0 ? <a href={props.data[0]. link} > {props.data[0].link} </a> : <input type="text" style={{marginBottom: "20px"}} placeholder={props.data[0].link}/>}
            {selection === 1 && <button>{t('saveChanges')}</button>}
         </div>
      </div>
   );
}