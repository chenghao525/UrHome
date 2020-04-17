import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as mapActions from "../store/actions/map";
import * as apartmentAction from "../store/actions/apartment";

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

import Apartment_data from "../data/Apartment_data";

const { Content, Footer, Sider } = Layout;
const { Meta } = Card;

const NeighborhoodCardList = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("Walbrook");

  const neighborhoods = useSelector((state) => state.apartment.neighborhoods);
  const displayApartments = useSelector((state) => {
    return state.apartment.apartments.filter(
      (x) => x.neighborhood === selectedNeighborhood
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(mapActions.setFacilities());
      await dispatch(apartmentAction.setNeighborhoods());
      await dispatch(apartmentAction.setApartments());
    };
    fetchData();
  }, []);

  // * test
  // useEffect(() => {
  //   console.log(apartments);
  // },[apartments])

  const neighborhoodRenderItem = (item) => {
    const neighborhood = item;
    function neighborhoodCardOnClick() {
      setVisible(false);
      setSelectedNeighborhood(neighborhood.name);
    }
    return (
      // <Popover content={content} title="Title" trigger="click"></Popover>
      <div onClick={neighborhoodCardOnClick}>
        <Card hoverable className="house-single-card">
          {/* FIXME: img not showing as expected */}
          {/* <img
        className="house-card-img"
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      /> */}
          <div className="house-card-img-container"></div>
          <div className="house-card-text-container">
            <div className="card-title">{neighborhood.name}</div>
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
      </div>
    );
  };

  const apartmentRenderItem = (item) => {
    const apartment = item;
    function apartmentCardOnClick() {
      setVisible(true);
    }
    return (
      // <Popover content={content} title="Title" trigger="click"></Popover>
      <div onClick={apartmentCardOnClick}>
        <Card hoverable className="house-single-card">
          {/* FIXME: img not showing as expected */}
          {/* <img
        className="house-card-img"
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      /> */}
          <div className="house-card-img-container"></div>
          <div className="house-card-text-container">
            <div className="card-title">{apartment.type}</div>
          </div>
        </Card>
      </div>
    );
  };
  const DisplaySection = () => (
    <div className="house-cards">
      {visible ? (
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={neighborhoods}
          renderItem={neighborhoodRenderItem}
        />
      ) : (
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={displayApartments}
          renderItem={apartmentRenderItem}
        />
      )}
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
