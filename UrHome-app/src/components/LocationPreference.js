import React, { useEffect, useState } from "react";
import * as mapActions from "../store/actions/map";
import { useDispatch, useSelector } from "react-redux";

import { Layout, Button, Input, Card, Checkbox } from "antd";

const { Content, Footer, Sider } = Layout;
const { Meta } = Card;




const gymChecked = (e) =>{
  console.log(`checked = ${e.target.checked}`);
}

const coffeeChecked = (e) =>{
  console.log(`checked = ${e.target.checked}`);
}

const restaurantChecked = (e) =>{
  console.log(`checked = ${e.target.checked}`);
}

const groceryChecked = (e) =>{
  console.log(`checked = ${e.target.checked}`);
}

const LocationPreferance = (e) => {
  
  
  return (
    <>
      <div style={{ textAlign: "left" }}>Facilities</div>
      <Checkbox onChange={gymChecked}>Gym</Checkbox>
      <Checkbox onChange={coffeeChecked}>Coffee Shop</Checkbox>
      <Checkbox onChange={restaurantChecked}>Restaurant</Checkbox>
      <Checkbox onChange={groceryChecked}>Grocery Store</Checkbox>
      <div className="price-safty-btns" style={{ margin: "30px 0" }}>
        <Button>Price</Button>
        <Button>Safety</Button>
      </div>
    </>
  );
};

export default LocationPreferance;
