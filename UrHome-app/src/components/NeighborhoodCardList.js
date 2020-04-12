import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as mapActions from "../store/actions/map";
import * as apartmentsAction from "../store/actions/apartments";

import "../styles/filterMapPageStyle.css";
import {
  Layout,
  Button,
  Input,
  Card,
  List,
  Typography,
  Divider,
  Popover,
} from "antd";
import {
  CheckOutlined,
  EnvironmentOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";

import APARTMENTS from "../data/apartment_data";

const { Content, Footer, Sider } = Layout;
const { Meta } = Card;

const NeighborhoodCardList = () => {
  const dispatch = useDispatch();
  const facilities = useSelector((state) => state.map.facilities);
  const neighborhoods = useSelector((state) => state.map.neighborhoods);
  // const apartments = useSelector((state) => state.apartments.apartments);
  const apartments = APARTMENTS;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(mapActions.setFacilities());
      await dispatch(mapActions.setNeighborhoods());
      // await dispatch(apartmentsAction.setApartments());
    };
    fetchData();
  }, []);
  // useEffect(() => {
  //   console.log(apartments);
  // },[apartments])

  const content = (
    <div>
      <p>{apartments[0].type}</p>
      <p>{apartments[0].bedsNum}</p>
      <p>{apartments[0].price}</p>
      <p>{apartments[0].image}</p>
      <p>{apartments[0].address}</p>
      {/* <p>{apartments}</p> */}
    </div>
  );

  const neighborhoodRenderItem = (item) => (
    <Popover content={content} title="Title" trigger="click">
      <Card hoverable className="house-single-card">
        {/* FIXME: img not showing as expected */}
        {/* <img
        className="house-card-img"
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      /> */}
        <div className="house-card-img-container"></div>
        <div className="house-card-text-container">
          <div className="card-title">{item.name}</div>
          <div className="distance">
            <CheckOutlined style={{ color: "green", marginRight: "5px" }} />
            <EnvironmentFilled />
            15 mins bike
          </div>
          <div className="seleted-criterion">
            <CheckOutlined style={{ color: "green", marginRight: "5px" }} />
            Gym
          </div>
          <div className="seleted-criterion">
            <CheckOutlined style={{ color: "green", marginRight: "5px" }} />
            Coffee Shop
          </div>
          <div className="card-more-text">More</div>
        </div>
      </Card>
    </Popover>
  );

  const DisplaySection = () => (
    <div className="house-cards">
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={neighborhoods}
        renderItem={neighborhoodRenderItem}
      />
    </div>
  );

  const SearchSection = () => (
    <div className="search-section">
      <div className="single-search-input">
        Bedrooms
        <Input size="small" style={{ width: "100px", marginLeft: "10px" }} />
      </div>
      <div className="single-search-input">
        Bathrooms
        <Input size="small" style={{ width: "100px", marginLeft: "10px" }} />
      </div>
      <div className="single-search-input">
        Rent
        <Input size="small" style={{ width: "50px", margin: "0 10px" }} />
        to
        <Input size="small" style={{ width: "50px", margin: "0 10px" }} />
      </div>
      <div className="single-search-input">
        Home Types
        <Input size="small" style={{ width: "100px", marginLeft: "10px" }} />
      </div>
      <Button>Search</Button>
    </div>
  );

  return (
    <>
      <SearchSection />
      <DisplaySection />
    </>
  );
};

export default NeighborhoodCardList;
