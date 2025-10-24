import { Menu } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CustomMenu = ({setCurrencyId}) => {
  const [currencies, setCurrencies] = useState([])

  const fetchCurrencies = () => {
    axios.get('http://127.0.0.1:8000/currencies').then(res=>{
      const currenciesResponse = res.data
      const menuItems = [
  {
    key: 'grp',
    label: 'Список криптовалют',
    children: currenciesResponse.map(c=> ({label: c.name, key: c.id})),
    type: 'group'
  },
];
      setCurrencies(menuItems)
    })
  }

  useEffect(()=> {
    fetchCurrencies()
  },[])

  const onClick = e => {
   setCurrencyId(e.key)
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={currencies}
      className='h-screen overflow-scroll'
    />
  );
};
export default CustomMenu;