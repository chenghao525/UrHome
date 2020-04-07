import React, { useEffect, useState } from "react";
import * as mapActions from "../store/actions/map";
import { useDispatch, useSelector } from "react-redux";

import { Layout, Button, Input, Card } from "antd";

const { Content, Footer, Sider } = Layout;
const { Meta } = Card;

const LocationPreferance = () => {
  return (
    <>
      <div style={{ textAlign: "left" }}>Facilities</div>
      <Button>Gym</Button>
      <Button>Coffee Shop</Button>
      <Button>Restaurant</Button>
      <Button>Grocery Store</Button>
      <div className="price-safty-btns" style={{ margin: "30px 0" }}>
        <Button>Price</Button>
        <Button>Safety</Button>
      </div>
    </>
  );
};

export default LocationPreferance;
