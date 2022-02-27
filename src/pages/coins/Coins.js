import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import "./coins.css";
import axios from "axios";


function Coins() {
    const Url = " https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    
    const [data, setData] = useState([]);

    useEffect(() => {
  
        axios.get(Url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    console.log(data);

  return (
      <>
    <div className="coins ">
         <div className="container">
        <div className="heading">
            <h2>here are all the coins and thier market rates</h2>
        </div>
        <div className="coins-container">
        {data.map((coin , index)=>(
              <div className="card" key={index}>
              <div className="top">
                <img src={coin.image} alt="" />
              </div>
              <div className="sec">
                <h5>{coin.name}</h5>
                <p>${coin.current_price.toLocaleString()}</p>
              </div>
              {coin.price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FaArrowDown />
                  {coin.price_change_percentage_24h}%
                </span>) : (
                <span className="green">
                  <FaArrowUp />
                  {coin.price_change_percentage_24h}%
                </span>
              )}
            </div>
        ))}
        </div>
        </div>
    </div>
    </>
  )
}

export default Coins