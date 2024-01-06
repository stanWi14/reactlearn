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
        {/* <div className="row">
          <DeviceCard title="Device 1" images="https://amusementlogic.com/wp-content/uploads/2019/04/Habitaciones-inteligentes.jpg" description = "Stan Room Monitor"/>
          <DeviceCard title="Device 2" images="https://arte-hotel-api.ubicilembu.com/uploads/arte_smartroomnew_9fecbe93fa.jpg" description = "Not Stan Room Monitor"/>
          <DeviceCard title="Device 3" images ="https://cdn7.site-media.eu/images/1200/5971147/bmine-Frankfurt-Airport-Smart-Roomcstudio-khf2.jpg" description = "Staff Room Monitor"/>
          <DeviceCard title="Device 4" images ="https://cf.bstatic.com/xdata/images/hotel/max1024x768/460505929.jpg?k=f44c9573414c920aed3a6f514d897b3f5cbb77ac6df3ecc38162257b2f6a88db&o=&hp=1" description = "Stall Room Monitor"/>
        </div> */}
      </div>
    }
  }

  export default Main