import React, { useEffect } from "react";

function CoinTracker(props) {
  const [loading, setLoading] = React.useState(true);
  const [coins, setCoins] = React.useState([]);
  const [curVal, setCurval] = React.useState("");

  const onChange = (e) => {
    setCurval(e.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((respose) => {
        return respose.json();
      })
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin, index) => {
            return (
              <option key={index}>
                {coin.name} ({coin.symbol}) ${coin.quotes.USD.price}USD
              </option>
            );
          })}
        </select>
      )}
      <br />
      {curVal}
    </div>
  );
}

export default CoinTracker;
