import image from '../icons/clouds_icon-icons.com_62491.png'
import { useEffect,useState} from 'react';
import moment from 'moment'
import { useTranslation } from 'react-i18next';
import { useSelector,useDispatch } from 'react-redux';
import { weatherAsync } from '../redux/weatherRedux';
import { changeWeather } from '../redux/weatherRedux';


export default function Wheather({style}){

    let dispatch=useDispatch();
    
   
    let temp=useSelector((state)=>{
        return state.weather.weather;
    })
let { t, i18n } = useTranslation();

let [date,setDate]=useState('')
let [langushe,setLangushe]=useState('ar')
   
    // handler
    function handleChange(){
        if(langushe=='ar')
        {
            setLangushe('en')
                i18n.changeLanguage('en')

        }
        else{
                i18n.changeLanguage('ar')

setLangushe('ar');
        }


    }
useEffect(()=>{
    dispatch(changeWeather())
    i18n.changeLanguage(langushe)
    setDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
    dispatch(weatherAsync())


},[])
    let lightDark=style==true?'bg-gray-900':'bg-blue-900';
    let direction=langushe=='ar'?"rtl":"ltr";
    return(
       <div className='weather' style={{direction:`${direction}`}} >
       <div className={`box ${lightDark}`}>
            <div className="header">
                <h1>{t('Damascuse')}</h1>
                <div className="date">
                 {date}
                </div>
            </div>
            <div className="section">
                <div className="temperture">
                    <div className="deggre">

                        <h2>{temp.degree}</h2>
                        <img src={`https://openweathermap.org/img/wn/${temp.icon}.png`} alt="" />
                    </div>
                    <p>{t(temp.description)}</p>
                    <div className="type">
                        <span>{t("min")}:{temp.temp_min}</span>
                        <span>{t("max")}:{temp.temp_max}</span>
                    </div>

                </div>
                <div className="cloud">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
        <div className='langushe' onClick={handleChange}>
            {langushe=='ar'?'إنكليزي':'Arabic'}
        </div>
        </div>
    )
}