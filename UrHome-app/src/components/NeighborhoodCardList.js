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
const { Title, Text } = Typography;

const NeighborhoodCardList = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  const [inputBedNum, setInputBedNum] = useState(2);
  const [inputBathNum, setInputBathNum] = useState(2);
  const [inputRentFrom, setInputRentFrom] = useState(500);
  const [inputRentTo, setInputRentTo] = useState(900);

  const apart = useSelector((state) => {
    return state.apartment.apartments;
  });
  const [apartments, setApartments] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState(["Walbrook"]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("Walbrook");
  const [displayApartments, setDisplayApartments] = useState([]);

  function onSearchButtonOnClicked() {
    setApartments(
      apart.filter((x) => x.price > inputRentFrom && x.price < inputRentTo)
    );
  }

  useEffect(() => {
    onSearchButtonOnClicked();
  }, [apart]);

  useEffect(() => {
    const res = apartments.map((x) => {
      return { name: x.neighborhood };
    });
    setNeighborhoods(res.filter((v, i) => res.indexOf(v) == i));
    setDisplayApartments(
      apartments.filter((x) => x.neighborhood === selectedNeighborhood)
    );
  }, [apartments, selectedNeighborhood]);
  // const neighborhoods = useSelector((state) => state.apartment.neighborhoods);
  // const displayApartments = useSelector((state) => {
  //   return state.apartment.apartments.filter(
  //     (x) => x.neighborhood === selectedNeighborhood
  //   );
  // });

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(mapActions.setFacilities());
      await dispatch(apartmentAction.setNeighborhoods());
      await dispatch(apartmentAction.setApartments());
    };
    fetchData();
    setApartments(apart);
    // onSearchButtonOnClicked();
  }, []);

  // * test
  // useEffect(() => {
  //   console.log(apartments);
  // },[apartments])
  // const [inputHomeType, setInputHomeType] = useState()

  const SearchSection = () => {
    function onChange() {}
    return (
      <div className="search-section">
        <div className="single-search-input">
          Bedrooms
          <Input
            size="small"
            style={{ width: "100px", marginLeft: "10px" }}
            defaultValue={inputBedNum}
            onChange={setInputBedNum}
          />
        </div>
        <div className="single-search-input">
          Bathrooms
          <Input
            size="small"
            style={{ width: "100px", marginLeft: "10px" }}
            defaultValue={inputBathNum}
            onChange={setInputBathNum}
          />
        </div>
        <div className="single-search-input">
          Rent
          <Input
            size="small"
            style={{ width: "50px", margin: "0 10px" }}
            defaultValue={inputRentFrom}
            onChange={setInputRentFrom}
          />
          to
          <Input
            size="small"
            style={{ width: "50px", margin: "0 10px" }}
            defaultValue={inputRentTo}
            onChange={setInputRentTo}
          />
        </div>
        {/* <div className="single-search-input">
          Home Types
          <Input size="small" style={{ width: "100px", marginLeft: "10px" }} />
        </div> */}
        <Button>Search</Button>
      </div>
    );
  };

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

  function apartmentCardOnClick() {
    setVisible(true);
  }
  const apartmentRenderItem = (item) => {
    const apartment = item;
    const imageSrc =
      apartment.image.substring(0, 4) == "http"
        ? apartment.image
        : "https://photos.zillowstatic.com/p_e/ISr9wklmtkf5du0000000000.jpg";
    return (
      // <Popover content={content} title="Title" trigger="click"></Popover>
      <div onClick={apartmentCardOnClick}>
        {/* <Card hoverable className="house-single-card"> */}
        <Card>
          {/* <div className="house-card-img-container"> */}
          <img className="house-card-img" alt="example" src={imageSrc} />
          {/* </div> */}
          {/* <div className="house-card-text-container"> */}
          <div className="card-title">{apartment.type}</div>
          <br />
          <Text>number of beds: {apartment.bedsNum}</Text>
          <br />
          <Text>Price:{apartment.price}</Text>
          <br />
          <Text>address:{apartment.address}</Text>
          <br />
          <Text>location:{apartment.location.lat}</Text>
          {/* </div> */}
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
          header={<div onClick={apartmentCardOnClick}>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={displayApartments}
          renderItem={apartmentRenderItem}
        />
      )}
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
