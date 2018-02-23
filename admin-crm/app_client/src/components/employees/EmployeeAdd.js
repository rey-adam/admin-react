import React, {Component} from "react";

class EmployeeAdd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          jobTitle: '',
          age: '',

    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({firstName: event.target.firstName});
      this.setState({lasttName: event.target.lastName});
      this.setState({jobTitle: event.target.jobTitle});
      this.setState({age: event.target.age});
    }
  
    handleSubmit(event) {
      alert('A new employee was submitted: ' + this.state.firstName + this.state.lastName + this.state.jobTitle + this.state.age);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
           First Name:
            <input type="text" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label>
            Job Title:
            <input type="text" value={this.state.jobTitle} onChange={this.handleChange} />
          </label>
          <label>
            Age:
            <input type="number" value={this.state.age} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  

export default EmployeeAdd;