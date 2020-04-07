import React, { useEffect, useState } from "react";
import * as mapActions from "../store/actions/map";
import { useDispatch, useSelector } from "react-redux";

import { Layout, Button, Input, Card } from "antd";

const { Content, Footer, Sider } = Layout;
const { Meta } = Card;

const Map = () => {
  return (
    <div style={{ padding: 24, background: "#fff", textAlign: "center" }}>
      Google Map
    </div>
  );
};

export default Map;