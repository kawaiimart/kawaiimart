import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Confirmation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" style={{marginTop: "50px"}}>
        <h2>Thank you! Your order is complete</h2>
        <Link to="/products">
            <button style={{background: "grey", border: "grey"}} type="submit" className="btn btn-primary">
                Continue shopping
            </button>
        </Link>
      </div>
    )
  }


}

export default Confirmation
