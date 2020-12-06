import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

class CreateExercises extends Component {
  constructor(props) {
    super(props);

    //whenever state is updated, DOM is rendered
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  // react lifecycle method
  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "test user",
    });
  }

  // set username from text-box
  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value, // updates
    });
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value, // updates
    });
  };

  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value, // updates
    });
  };

  onChangeDate = (date) => {
    this.setState({
      date: date, // updates
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);

    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          <label>Username: </label>
            <div>
              <select
                ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              >
                {this.state.users.map((user) => {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            </div>
            <div className="form-group">
                <label>Description: </label>
                <input type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
            </div>
            <div className="form-group">
                <label>Duration (in minutes): </label>
                <input
                    type="text"
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
            </div>
            <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                    selected = {this.state.date}
                    onChange={this.onChangeDate}
                    />
                </div>
            </div>
            
            <div className="form-group">
                <input type="submit" value="Create Exercize Log" className= "btn btn-primary" />
            </div>
        </form>
      </div>
    );
  }
}

export default CreateExercises;