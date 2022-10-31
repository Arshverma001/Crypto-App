import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import Coin from "../Components/Coin";
import Refresh from "../Images/refresh.png";

 function Home(){
    const[IsLoading,setIsLoading]=useState(false);
    const[searchterm,setSearchTerm]=useState("");
    const[coins,setCoins]=useState([]);

    useEffect(() => {
      refreshPage();
    }, []);
    
    const filterCoins=coins.filter((coin)=>
  coin.name.toLowerCase().includes(searchterm.toLowerCase())
  );

  const handleSearch=(e)=>{
    setSearchTerm(e.target.value)
  };

    const refreshPage = () => {
      setIsLoading(true);
      Axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      ).then((response) => {
        console.log(response.data);
        setIsLoading(false);
        setCoins(response.data);
      });
    };
    return (
      <div className="App">
        <div className="headerContainer">
          <h1>Welcome to the CryptoChecker</h1>
          <div className="buttonContainer">
            <input
              placeholder="Search for a Coin"
              type="text"
              onChange={handleSearch}
            />
            <img onClick={refreshPage} src={Refresh} alt="refresh"></img>
          </div>
        </div>
        <div className="coinContainer">
          {IsLoading && <h1 className="loadingMssg">Data Loading...</h1>}
          {filterCoins.map((coins) => {
            return (
              <Coin
                id={coins.id}
                icon={coins.image}
                coinName={coins.name}
                coinSymbol={coins.symbol}
                price={coins.current_price}
                marketCap={coins.market_cap}
                priceChange={coins.price_change_percentage_24h}
              />
            );
          })}
        </div>
      </div>
    );
  }

export default Home;


