import React, { useEffect, useState } from "react";
import * as mapActions from "../store/actions/map";
import { useDispatch, useSelector } from "react-redux";
import NeighborhoodCardList from "../components/NeighborhoodCardList";
import Map from "../components/Map";
import LocationPreference from "../components/LocationPreference";

import { Layout, Button, Input, Card } from "antd";
import "../styles/filterMapPageStyle.css";
const { Content, Footer, Sider } = Layout;
const { Meta } = Card;

const FilterMapPage = () => {
  // * test
  // useEffect(() => {
  //   console.log(facilities);
  // }, [facilities]);

  return (
    <Layout>
      <Sider style={styles.sider} width={450}>
        <NeighborhoodCardList />
      </Sider>
      <Layout style={styles.mainLayout}>
        <Content style={styles.filter}>
          <LocationPreference />
        </Content>
        <Content style={styles.map}>
          <Map />
        </Content>
        <Footer style={styles.footer}>
          UrHome ©2020 Created by UrHome Group
        </Footer>
      </Layout>
    </Layout>
  );
  // }
};

let styles = {
  container: {
    backgroundColor: "red",
  },
  sider: {
    overflow: "auto",
    height: "100vh",
    position: "relative",
    left: 0,
    backgroundColor: "white",
    width: "100%",
  },
  mainLayout: { margin: "70px 50px" },
  filter: { background: "#fff", padding: "10px 20px" },
  map: { margin: "24px 0", overflow: "initial" },
  footer: { textAlign: "center" },
};
export default FilterMapPage;
