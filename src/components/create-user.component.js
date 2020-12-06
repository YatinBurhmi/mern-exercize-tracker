import React, { Component } from "react";
import axios from 'axios';
class CreateUsers extends Component {
  constructor(props) {
    super(props);

    //whenever state is updated, DOM is rendered
    this.state = {
      username: "",
    };
  }

  // set username from text-box
  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value, // updates
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    // sending http POST request to the backend endpoint
    // user is a json object that API is expecting in the request body
    
    axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
    this.setState({
        username:'',
    })

    // window.location = "/";
  };


  render() {
    return (
      <div>
       <h3>Create New User</h3>
       <form onSubmit={this.onSubmit}>
           <div className="form-group">
               <label>Username: </label>
               <input type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
               />
           </div>
           <div className="form-group">
               <input type="submit" value="Create User" className="btn btn-primary" />
           </div>
       </form>
      </div>
    );
  }
}

export default CreateUsers;
