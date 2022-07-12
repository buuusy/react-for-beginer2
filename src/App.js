import React from 'react';
import { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [Selected, setSelected] = useState('');
  const regex = /\b[+-]?\d+(?:,\d{3})*(?:\.\d+)?\b/;

  //한번 실행되는 함수
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);

  const selectedCoin = (e) => setSelected((prev) => e.target.value);
  const optionList = coins.filter((coin) => !Selected.includes(coin.name));

  return (
    <div>
      <h1>The Coins!({loading ? '' : coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={selectedCoin} value={Selected}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <h2>Change Coins</h2>
      <ul>
        {optionList.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) :
            {Selected ? `${coin.quotes.USD.price / Selected.match(regex)} USD` : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
