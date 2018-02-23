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
      const {name, value } = event.target;
      this.setState({ [name]: value});
    }
  
    handleSubmit(event) {
      alert('A new employee was submitted: ' + this.state.firstName + " " + this.state.lastName + " "  + this.state.jobTitle + " "  + this.state.age);
      event.preventDefault();
    }
  

    render() {
      return (
        <div class="row">
        <div class="col-md-4 col-centered">
        <form onSubmit={this.handleSubmit}>
          <label>
           First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label>
            Job Title:
            <input type="text" name="jobTitle" value={this.state.jobTitle} onChange={this.handleChange}/>
          </label>
          <label>
            Age:
            <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
        </div>
      );
    }
  }
  

export default EmployeeAdd;
