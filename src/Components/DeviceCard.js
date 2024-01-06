import React, {Component}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class DeviceCard extends Component {
    render() {
      return (
        <div className="col-md-6 col-lg-4">
          <div className="card" style={{ margin: '20px', height: '400px', overflow: 'hidden' }}>
            <img
              src={this.props.images}
              className="card-img-top"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              alt="Card"
            />
            <div className="card-body" style={{ height: '100%' }}>
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
              <a href="#" className="btn btn-primary">
                See more
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default DeviceCard