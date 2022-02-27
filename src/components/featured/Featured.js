import React, { useEffect, useState } from "react";
import "./Featured.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import axios from "axios";
import { useNavigate} from 'react-router-dom'

function Featured() {
  const Url =
    " https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  const [data, setData] = useState([]);
  let navigate = useNavigate()
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
  if (!data) return null;

  return (
    <div className="featured">
      <div className="container">
        <div className="featured-left">
          <h2>Explore top Crypto's of all time like Bitcoin</h2>
          <p>see all available assets: Crypto and Nfts</p>
          <button className="btn" onClick={()=>{navigate('/coins')}}>See More Coins</button>
        </div>
        <div className="featured-right">
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
  );
}

export default Featured;
