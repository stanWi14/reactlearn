import React, {Component}from "react";
import List from "./List";
import Title from "./Title";
import DeviceCard from "./DeviceCard";
import Mapping from "./Mapping";
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component{
    render(){
      return<div>
        <Title/>
        <Mapping/>
      </div>
    }
  }

  export default Main