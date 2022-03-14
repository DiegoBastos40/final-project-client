import React, { Component } from "react";
import "./BMRstyle.css";

export class Bmr extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      weight: "",
      age: "",
      // heightFeet: '',
      // heightInches: '',
      heightCm: "",
      activity: "",
      bmr: "",
      error: "",
      calories: ""
    };
  }

  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  // handleHeightFeetChange =(event) => {
  //     this.setState({heightFeet : event.target.value})
  // }
  handleHeightCmChange = (event) => {
    this.setState({ heightCm: event.target.value });
  };

  // handleHeightInchesChange =(event) => {
  //     this.setState({heightInches : event.target.value})
  // }

  handleActivityChange = (event) => {
    this.setState({ activity: event.target.value });
  };

  calculateBMR() {
    let age = this.state.age;
    let weight = this.state.weight;
    let heightCm = this.state.heightCm;
    // let heightFeet = this.state.heightFeet;
    // let heightInches = this.state.heightInches;
    let gender = this.state.gender;

    if (age == "" || weight == "" || gender == "" || heightCm == "") {
      this.setState({ error: "All fields are required." });
      return;
    }

    let bmr = "";

    if (gender == 1) {
      bmr = 66.5 + 13.75 * weight + 5.003 * heightCm - 6.755 * age;
    } else if (gender == 2) {
      bmr = 655 + 9.563 * weight + 1.85 * heightCm - 4.676 * age;
    }

    // let height = ((heightFeet * 30.48)  + (heightInches * 2.54));
    // if(gender==1){
    //     bmr = 66.5 + ( 6.2  * weight ) + ( 12.7 * height ) - ( 6.76 * age );
    // }
    // else if(gender==2){
    //     bmr = 655.1 + ( 4.35 * weight) + ( 4.7  * height) - ( 4.7 * age );
    // }

    this.setState({ bmr: bmr });
    this.setState({ error: "" });
  }

  CalculateCal() {
    let activity = this.state.activity;

    let calories;
    if (activity == 1.2) {
      calories = this.state.bmr * 1.2;
    } else if (activity == 1.375) {
      calories = this.state.bmr * 1.375;
    } else if (activity == 1.55) {
      calories = this.state.bmr * 1.55;
    } else if (activity == 1.725) {
      calories = this.state.bmr * 1.725;
    } else if (activity == 1.9) {
      calories = this.state.bmr * 1.9;
    }

    this.setState({ calories: calories });
  }

  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }

    let resultBmr;
    if (this.state.bmr) {
      resultBmr = <div className="result">{this.state.bmr}</div>;
    }

    let calcCalories;
    if (this.state.bmr) {
      calcCalories = (
        <div className="workout">
          <div className="inputwrap">
            <label className="label">Workout in a Week</label>
            <select
              className="activity"
              value={this.state.activity}
              onChange={this.handleActivityChange}
              name="activity"
            >
              <option value="">Select your Activity</option>
              <option value="1.2">
                Sedentary (Very little or no exercise, and desk job)
              </option>
              <option value="1.375">
                Lightly Active (Light exercise 1 to 3 days per week)
              </option>
              <option value="1.55">
                Moderately Active (Moderate exercise 3 to 5 days per week)
              </option>
              <option value="1.725">
                Very Active (Heavy exercise 6 to 7 days per week)
              </option>
              <option value="1.9">
                Extremely Active (Very intense exercise, and physical job,
                exercise multiple times per day)
              </option>
            </select>
          </div>
          <button type="button" onClick={() => this.CalculateCal()}>
            Calculate Calories
          </button>
        </div>
      );
    }

    let resultCalories;
    if (this.state.calories) {
      resultCalories = <div className="result">{this.state.calories}</div>;
    }

    return (
      <div id="bmrcalc">
        <div className="form">
          <h2>BMR &amp; Daily Calorie Calculator</h2>
          {error}
          <div className="inputwrap">
            <label className="label">Gender</label>

            <label>
              <input
                type="radio"
                className="genderM"
                checked={this.state.gender === "1"}
                onChange={this.handleGenderChange}
                name="gender"
                value="1"
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                className="genderF"
                checked={this.state.gender === "2"}
                onChange={this.handleGenderChange}
                name="gender"
                value="2"
              />
              Female
            </label>
          </div>

          <div className="inputwrap">
            <label className="label">Weight in Kilogram</label>
            <input
              type="number"
              value={this.state.weight}
              onChange={this.handleWeightChange}
              name="weight"
              className="weight"
              min="0"
              max="999"
            />
          </div>

          <div className="inputwrap">
            <label className="label">Height in cm</label>
            <input
              type="number"
              value={this.state.heightCm}
              onChange={this.handleHeightCmChange}
              name="heightCm"
              className="heightFeet heightCm"
              min="0"
              max="220"
            />

            {/* <input type="number" value={this.state.heightFeet} onChange={this.handleHeightFeetChange} name="heightFeet" className="heightFeet" min="0" max="8" /> */}
            {/* <input type="number" value={this.state.heightInchess} onChange={this.handleHeightInchesChange} name="heightInches" className="heightInches" min="0" max="11" /> */}
          </div>

          <div className="inputwrap">
            <label className="label">Age in years</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
              className="age"
              name="age"
              min="0"
              max="120"
            />
          </div>

          <button type="button" onClick={() => this.calculateBMR()}>
            Calculate BMR
          </button>
          {resultBmr}

          {calcCalories}
          {/* <div className="workout">
                        <div className="inputwrap">
                            <label className="label">Workout in a Week</label>
                            <select className="activity" value={this.state.activity} onChange={this.handleActivityChange} name="activity">
                                <option value="">Select your Activity</option>
                                <option value="1.2">Sedentary (Very little or no exercise, and desk job)</option>
                                <option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
                                <option value="1.55">Moderately Active (Moderate exercise 3 to 5 days per week)</option>
                                <option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
                                <option value="1.9">Extremely Active (Very intense exercise, and physical job, exercise multiple times per day)</option>
                            </select>
                        </div>
                        <button type="button">Calculate Calories</button>
                    </div> */}
          {resultCalories}
        </div>
      </div>
    );
  }
}

export default Bmr;