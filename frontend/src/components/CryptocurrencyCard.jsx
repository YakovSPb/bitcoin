
import { Card } from "antd"
import axios from "axios"
import React, { useEffect, useState } from "react"

function CryptocurrencyCard({currencyId}) {

  const [data, setData] = useState(null)

    const fetchCurrencies = () => {
    axios.get(`http://127.0.0.1:8000/currencies/${currencyId}`).then(res=>{
      const currenciesResponse = res.data

     setData(currenciesResponse)
    })
  }

  useEffect(()=> {
    fetchCurrencies()
  },[currencyId])

    useEffect(()=> {
    console.log('data',data)
  },[currencyId])

  if(!data) return <></>

  const { name, symbol, quote } = data;
  const { price, percent_change_24h, market_cap } = quote.USD;

  // Функция для форматирования чисел с разделителями
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  // Функция для форматирования больших чисел (капитализация)
  const formatMarketCap = (cap) => {
    if (cap >= 1e12) {
      return `$${(cap / 1e12).toFixed(2)} трлн`;
    } else if (cap >= 1e9) {
      return `$${(cap / 1e9).toFixed(2)} млрд`;
    } else if (cap >= 1e6) {
      return `$${(cap / 1e6).toFixed(2)} млн`;
    }
    return `$${formatNumber(cap)}`;
  };

  // Определяем цвет для изменения цены
  const getChangeColor = (change) => {
    return change >= 0 ? 'text-green-500' : 'text-red-500';
  };

  // Функция для отображения знака изменения
  const formatChange = (change) => {
    return change >= 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`;
  };

  return (
    <>
       {data && <Card 
        title={
            <div className="flex items-center gap-3">
                <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currencyId}.png`}/>
                <span>Bitcoin</span>
            </div>
            }
        style={{ width: 300 }}
       >
        <p>Текущая цена: ${formatNumber(price)}</p>
        <p>Изменение цены за 24 часа: <span className={`${getChangeColor(percent_change_24h)}`}>{formatChange(percent_change_24h)}</span></p>
        <p>Текущая капитализация: {formatMarketCap(market_cap)}</p>
        </Card>}
    </>
  )
}

export default CryptocurrencyCard
