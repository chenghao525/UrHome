import React, { useEffect, useState } from "react";
import * as mapActions from "../store/actions/map";
import { useDispatch, useSelector } from "react-redux";

import { Layout, Button, Input, Card, Checkbox } from "antd";
import * as userActions from "../store/actions/user";

const { Content, Footer, Sider } = Layout;
const { Meta } = Card;

const LocationPreferance = (e) => {
  // TODO:
  const dispatch = useDispatch();
  const [gymVisible, setGymVisible] = useState(true);
  const [supermarketVisible, setSupermarketVisible] = useState(true);
  const [restaurantVisible, setRestaurantVisible] = useState(true);
  const [cafeVisible, setCafeVisible] = useState(true);

  useEffect(() => {
    // const data = {
    //   facilitiesTypes: [],
    // };
    // dispatch(userActions.setOptions(data));
  }, [gymVisible, supermarketVisible, restaurantVisible, cafeVisible]);
  const facilitiTypes = useSelector((state) => {
    return state.user.facilityTypes;
  }, []);

  return (
    <>
      <div style={{ textAlign: "left" }}>Facilities</div>
      <Checkbox defaultValue={gymVisible} onChange={setGymVisible}>
        gym
      </Checkbox>
      <Checkbox defaultValue={cafeVisible} onChange={setCafeVisible}>
        Coffee Shop
      </Checkbox>
      <Checkbox
        defaultValue={restaurantVisible}
        onChange={setRestaurantVisible}
      >
        Restaurant
      </Checkbox>
      <Checkbox
        defaultValue={supermarketVisible}
        onChange={setSupermarketVisible}
      >
        Grocery Store
      </Checkbox>
      <div className="price-safty-btns" style={{ margin: "30px 0" }}>
        <Button>Price</Button>
        <Button>Safety</Button>
      </div>
    </>
  );
};

export default LocationPreferance;
