import React, { useState } from 'react';
import Menu from "./menuApi.jsx";
import MenuCard from './MenuCard.jsx';
import Navbar from './Navbar.jsx';
import "./style.css";


const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restaurant = () => {


    const [menuData, setMenuData]=useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    
    
    // console.log(menuData);
    const filterItem = (category) => {
      if (category === "All") {
        setMenuData(Menu);
        return;
      }
  
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });
  
      setMenuData(updatedList);
    };


  return (
    <>
{/* <nav className="navbar">
    <div className="btn-group">
        <button className="btn-group__item">Breakfast</button>
        <button className="btn-group__item">Lunch</button>
        <button className="btn-group__item">Evening</button>
        <button className="btn-group__item">Dinner</button>
        <button className="btn-group__item">All</button>
    </div>
    </nav> */}
  
    <Navbar filterItem={filterItem} menuList={menuList} />
<MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant
