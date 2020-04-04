import React from "react";
import { Layout, Button, Input } from "antd";
import '../styles/filterMapPageStyle.css';

const { Header, Content, Footer, Sider } = Layout;

class FilterMapPage extends React.Component {
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "relative",
            left: 0,
            backgroundColor: "white",
          }}
          width={450}
        >
          <div className="search-section">
            <div className="single-search-input">
              Bedrooms
              <Input size="small" style={{ width: "100px",marginLeft:"10px"}} />
            </div>
            <div className="single-search-input">
              Bathrooms
              <Input size="small" style={{ width: "100px",marginLeft:"10px"}} />
            </div>
            <div className="single-search-input">
              Rent
              <Input size="small" style={{ width: "50px",margin:"0 10px"}} />
              to
              <Input size="small" style={{ width: "50px",margin:"0 10px"}} />
            </div>
            <div className="single-search-input">
              Home Types
              <Input size="small" style={{ width: "100px",marginLeft:"10px"}} />
            </div>
            <Button>Search</Button>
          </div>
        </Sider>
        <Layout style={{ margin: "70px 50px" }}>
          <Content style={{ background: "#fff", padding: "10px 20px"}}>
            <div style={{textAlign:'left'}}>Facilities</div>
            <Button>Gym</Button>
            <Button>Coffee Shop</Button>
            <Button>Restaurant</Button>
            <Button>Grocery Store</Button>
            <div className="price-safty-btns" style={{margin:"30px 0"}}>
              <Button>Price</Button>
              <Button>Safety</Button>
            </div>


          </Content>
          <Content style={{ margin: "24px 0", overflow: "initial" }}>
            <div
              style={{ padding: 24, background: "#fff", textAlign: "center" }}
            >
              ...
              <br />
              Google Map
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              Google Map
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              Google Map
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              <br />
              ...
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            UrHome ©2020 Created by UrHome Group
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default FilterMapPage;
