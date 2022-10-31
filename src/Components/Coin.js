import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Coin.css"

const Coin =({
    icon,
    coinName,
    coinSymbol,
    price,
    marketCap,
    priceChange,
    id,
})=>{

   let navigate=useNavigate();
    return (
        <div className="coin-Container">
            <div className="coinRow">
                <div className="coinData">
                    <div className="coin">
                       <img src={icon} />
                       <h1 className="coinName">{coinName}</h1> 
                       <p className="coinSymbol">{coinSymbol}</p>
                       <p className="coinPrice">${price.toFixed(3)}</p>
                       {priceChange < 0 ? (
              <p className="priceChange red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="priceChange green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coinVolume">${marketCap.toLocaleString()}</p>
            <button onClick={()=>{
                navigate(`/CoinPage/${id}`)
            }}
            >
                More Info
            </button>
                    </div>
                </div>
            </div>
        </div>
    );

};


export default Coin;
