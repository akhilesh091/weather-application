import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import {AiOutlineSearch} from 'react-icons/ai'
import{FiSun,} from 'react-icons/fi'
import {WiHumidity} from 'react-icons/wi'
import {MdVisibility,MdAir} from 'react-icons/md'
import {GiWhirlwind} from 'react-icons/gi'
import {TbUvIndex,TbWorldLongitude,TbWorldLatitude} from 'react-icons/tb'
import {FaTachometerAlt} from 'react-icons/fa'

import {API_KEY} from '../Constants/Constants.js'
import axios from 'axios'
import { useQuery } from 'react-query'

function Dashboard() {
  const [state,setState]=useState("")

  const fetchWeather=()=>{
    return axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${state}&aqi=no`)
  }
 const {data,refetch}=useQuery("weather",fetchWeather,{enabled:false})
 console.log(data);
 
  // const getWeather=(city)=>{
  //   // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`).then((response)=>{
  //   //   setState(response.data)
  //   //   // console.log(response.data);
  //   // }).catch(()=>{
  //   //   console.log('data not get');
  //   // })
  //  axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`).then((response)=>{
  //     setState(response.data)
     
  //   }).catch(()=>{
  //     console.log('data not found');
  //   })
  // }
 
  // useEffect(()=>{
  //   getWeather('india')
  // },[])
  // console.log("weather===="+state.location.name);
  
  return (
    <>
     <div className="container">
       <div className="weather-book">
        <div className="temperature">
            <div className="search">
              <input type="text" name="" id=""  placeholder='Enter your city...' className='input-box' onChange={(e)=>setState(e.target.value)}/>
              <button className='btn-search' onClick={refetch}><AiOutlineSearch/></button>
            </div>
            <h1 className='city-name'>{data?.data?.location.name},  <span>{data?.data?.location.region}</span></h1>
            
            <div className="temp-img">
              <div className="img">
                {/* <FiSun/> */}
                <img src={data?.data?.current.condition?.icon} alt="" srcset="" />
              </div>
              <div className="temp">
                 <h1>{data?.data?.current.temp_c}℃</h1>
                 <p>{data?.data?.current.condition?.text}</p>
                 <p>Tuesday,2 p.m</p>
              </div>
            </div>
            <div className="dfcase">
             <div className=" variant feels">
              <p>{data?.data?.current.feelslike_c}°C</p>
              <FiSun className='icon'/>
              <p>Feels like</p>
             </div>
             <div className=" variant humidity">
             <p>{data?.data?.current.humidity}hu</p>
              <WiHumidity className='icon'/>
              <p>Humidity</p>
             </div>
             <div className=" variant visibility">
             <p>{data?.data?.current.vis_km}km</p>
              <MdVisibility className='icon'/>
              <p>Visibility</p>
             </div>
             <div className=" variant air-quality">
             <p>{data?.data?.current.wind_dir}°</p>
              <MdAir className='icon'/>
              <p>Wind_dir</p>
             </div>
             <div className=" variant wind">
            
             <p>{data?.data?.current.wind_kph}KM</p>
              < GiWhirlwind className='icon'/>
              <p>Wind</p>
             </div>
             <div className=" variant uv-index">
             
             <p>{data?.data?.current.uv}.</p>
              < TbUvIndex className='icon'/>
              <p>Uv index</p>
             </div>
             <div className=" variant pressure">
             
             <p>{data?.data?.current.pressure_in}p</p>
              < FaTachometerAlt className='icon'/>
              <p>pressure</p>
             </div>
             <div className=" variant dewpoint">
             
             <p>{data?.data?.location.lat} <span>lon</span></p>
              < TbWorldLongitude className='icon'/>
              <p>Longitude</p>
             </div>
             <div className=" variant sunrise">
             <p>{data?.data?.location.lon} <span>Lat</span></p>
              < TbWorldLatitude className='icon'/>
              <p>Latitude</p>
             </div>

            </div>

        </div>
        <div className="sealevel">
         
        </div>
        <div className="weather-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126271.88635353037!2d76.84176437040456!3d8.499724288006334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1684775758291!5m2!1sen!2sin" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </div>
       </div>
     </div>
    

   
    </>
  )
}

export default Dashboard
