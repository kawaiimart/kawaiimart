import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
//import { connect } from 'tls';


class AccountInfo extends Component {

  constructor(props){
    super(props)
    this.state = {
        user: this.props.user,
        orders: ''
    }
  }

  componentDidMount(){
      console.log("comp did mount")
      
      axios.get('/api/simpleorder')
      .then(
          res => {
              //console.log(res.data)
              this.setState(() => {
                  return {orders: res.data}
              })
          },
      ).catch(
          err => {console.log(err)}
      )
  }
  render() {
      return (
          <div>
              <h1>Account info</h1>
              <h1>Welcome {this.state.user.name}</h1>
              
          </div>
      )
   }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, null)(AccountInfo)
