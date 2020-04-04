import React from "react";
import { Layout, Button, Input, Card } from "antd";
import "../styles/filterMapPageStyle.css";
import { CheckOutlined,EnvironmentOutlined,EnvironmentFilled} from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;
const { Meta } = Card;

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
              <Input
                size="small"
                style={{ width: "100px", marginLeft: "10px" }}
              />
            </div>
            <div className="single-search-input">
              Bathrooms
              <Input
                size="small"
                style={{ width: "100px", marginLeft: "10px" }}
              />
            </div>
            <div className="single-search-input">
              Rent
              <Input size="small" style={{ width: "50px", margin: "0 10px" }} />
              to
              <Input size="small" style={{ width: "50px", margin: "0 10px" }} />
            </div>
            <div className="single-search-input">
              Home Types
              <Input
                size="small"
                style={{ width: "100px", marginLeft: "10px" }}
              />
            </div>
            <Button>Search</Button>
          </div>
          <div className="house-cards">
            <Card hoverable className="house-single-card">
              <div className="house-card-img-container">
                <img
                className="house-card-img"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </div>
              <div className="house-card-text-container">
                  <div className="card-title">Burtonsive</div>
                  <div className="distance"><CheckOutlined style={{color:"green", marginRight:'5px'}}/><EnvironmentFilled />15 mins bike</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Gym</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Coffee Shop</div>
                  <div className="card-more-text">More</div>
              </div>
            </Card>
            <Card hoverable className="house-single-card">
              <div className="house-card-img-container">
                <img
                className="house-card-img"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </div>
              <div className="house-card-text-container">
                  <div className="card-title">Canton</div>
                  <div className="distance"><CheckOutlined style={{color:"green", marginRight:'5px'}}/><EnvironmentFilled />15 mins bike</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Gym</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Coffee Shop</div>
                  <div className="card-more-text">More</div>
              </div>
            </Card>
            <Card hoverable className="house-single-card">
              <div className="house-card-img-container">
                <img
                className="house-card-img"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </div>
              <div className="house-card-text-container">
                  <div className="card-title">Columbia</div>
                  <div className="distance"><CheckOutlined style={{color:"green", marginRight:'5px'}}/><EnvironmentFilled />15 mins bike</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Gym</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Coffee Shop</div>
                  <div className="card-more-text">More</div>
              </div>
            </Card>
            <Card hoverable className="house-single-card">
              <div className="house-card-img-container">
                <img
                className="house-card-img"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </div>
              <div className="house-card-text-container">
                  <div className="card-title">Burtonsive</div>
                  <div className="distance"><CheckOutlined style={{color:"green", marginRight:'5px'}}/><EnvironmentFilled />15 mins bike</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Gym</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Coffee Shop</div>
                  <div className="card-more-text">More</div>
              </div>
            </Card>
            <Card hoverable className="house-single-card">
              <div className="house-card-img-container">
                <img
                className="house-card-img"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </div>
              <div className="house-card-text-container">
                  <div className="card-title">Burtonsive</div>
                  <div className="distance"><CheckOutlined style={{color:"green", marginRight:'5px'}}/><EnvironmentFilled />15 mins bike</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Gym</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Coffee Shop</div>
                  <div className="card-more-text">More</div>
              </div>
            </Card>
            <Card hoverable className="house-single-card">
              <div className="house-card-img-container">
                <img
                className="house-card-img"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </div>
              <div className="house-card-text-container">
                  <div className="card-title">Burtonsive</div>
                  <div className="distance"><CheckOutlined style={{color:"green", marginRight:'5px'}}/><EnvironmentFilled />15 mins bike</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Gym</div>
                  <div className="seleted-criterion"><CheckOutlined style={{color:"green", marginRight:'5px'}}/>Coffee Shop</div>
                  <div className="card-more-text">More</div>
              </div>
            </Card>
          </div>
        </Sider>
        <Layout style={{ margin: "70px 50px" }}>
          <Content style={{ background: "#fff", padding: "10px 20px" }}>
            <div style={{ textAlign: "left" }}>Facilities</div>
            <Button>Gym</Button>
            <Button>Coffee Shop</Button>
            <Button>Restaurant</Button>
            <Button>Grocery Store</Button>
            <div className="price-safty-btns" style={{ margin: "30px 0" }}>
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
              ... content
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
