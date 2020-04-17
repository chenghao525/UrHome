/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from "react";
import {} from "antd";
import "../styles/Guide.css";

import {
  Select,
  Steps,
  Button,
  message,
  Layout,
  Input,
  Card,
  List,
  Typography,
  Divider,
  Popover,
} from "antd";

import departmentDict from "../data/departmentList";
import { useDispatch } from "react-redux";
import * as userActions from "../store/actions/user";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

const { Step } = Steps;

const { Option } = Select;

const App = ({ navigation, route }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const [current, setCurrent] = useState(0);
  const [university, setUniversity] = useState("JHU");
  const [department, setDepartment] = useState("ME");
  const [minutes, setMinutes] = useState(20);
  const [transportationType, setTransportationType] = useState([]);
  const [facilityTypes, setFacilityTypes] = useState([]);

  useEffect(() => {
    console.log("guide test:");
    console.log(university, department);
  }, [university, department]);

  function Component1() {
    // const universityOptions = universityList;
    const universityOptions = Object.keys(departmentDict).map((x) => {
      return { value: x };
    });
    const departmentOptions = departmentDict[university].map((x) => {
      // const departmentOptions = departmentList.map(x =>  {
      return { value: x };
    });
    return (
      <div>
        <Title level={2}>Specific department</Title>
        <Title level={3}>Input the name of University</Title>
        <Select
          defaultValue={university}
          style={{ width: 120 }}
          onChange={setUniversity}
          options={universityOptions}
        />
        <Title level={3}>Specific department</Title>
        <Select
          defaultValue={department}
          style={{ width: 120 }}
          onChange={setDepartment}
          options={departmentOptions}
        />
      </div>
    );
  }
  function Component2() {
    var transportationOptions = [
      "Private car",
      "Bike/Scooter",
      "Public transport",
      "On foot",
    ];
    transportationOptions = transportationOptions.map((x) => {
      return { value: x };
    });
    var minutesOptions = [];
    for (let i = 0; i < 120; i++) {
      minutesOptions.push({ value: i });
    }
    return (
      <div>
        <Title level={2}>Location Preferences</Title>
        <Title level={3}>How do you get to school</Title>
        <Select
          mode="multiple"
          style={{ width: "30%" }}
          placeholder="Please select"
          defaultValue={transportationType}
          onChange={setTransportationType}
          options={transportationOptions}
        />
        <Title level={3}>
          You would like to live with in how many minutes?
        </Title>
        <Select
          defaultValue={minutes}
          style={{ width: 120 }}
          onChange={setMinutes}
          options={minutesOptions}
        />
      </div>
    );
  }
  function Component3() {
    var facilitateOptions = [
      "Sports centre",
      "Grocery",
      "Restaurants",
      "Cafe",
      "Food",
      "Supermarket",
    ];
    facilitateOptions = facilitateOptions.map((x) => {
      return { value: x };
    });
    return (
      <div>
        <Title level={2}>
          Choose the facilities you would like to have near your place
        </Title>
        <Select
          mode="multiple"
          style={{ width: "30%" }}
          placeholder="Please select"
          defaultValue={facilityTypes}
          onChange={setFacilityTypes}
          options={facilitateOptions}
        />
      </div>
    );
  }

  const steps = [<Component1 />, <Component2 />, <Component3 />];

  function next() {
    setCurrent(current + 1);
  }

  function prev() {
    setCurrent(current - 1);
  }

  // const [university, setUniversity] = useState("JHU");
  // const [department, setDepartment] = useState("Please select");
  // const [minutes, setMinutes] = useState(20);
  // const [transportationTypes, setTransportationType] = useState([]);
  const doneButtonOnPressed = async () => {
    message.success("Processing complete!");
    const data = {
      university: university,
      department: department,
      minutes: minutes,
      transportationType: transportationType,
      facilitiesTypes: facilityTypes,
    };
    await dispatch(userActions.setOptions(data));
    history.push("/main");
  };

  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current]}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={doneButtonOnPressed}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: 8 }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default App;
