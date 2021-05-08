import React, { Component } from "react";
import Checkboxes from "./Checkboxes";
// import "./../App.css";
const numbers = ["1", "2", "3", "4"];
// const colors = ["#ffffff", "#F7E3B3", "#71EB92", "#000fff"];
const classes = ["input1", "input2", "input3", "input4"];
class HeaderButtons extends Component {
  render() {
    //sp is for the span element in the Checkboxes function.
    return (
      <header className={this.props.headerClass}>
        {numbers.map((nums, col) => {
          //   const keys = numbers[nums];
          //   console.log(keys);
          return (
            <Checkboxes
              color1={this.props.color1}
              color2={this.props.color2}
              color3={this.props.color3}
              color4={this.props.color4}
              // color2={this.props.color2}
              // color3={this.props.color3}
              // color4={this.props.color4}
              handleChange1={event => this.props.handleChange1(event)}
              handleChange2={event => this.props.handleChange2(event)}
              handleChange3={event => this.props.handleChange3(event)}
              handleChange4={event => this.props.handleChange4(event)}
              //this.props.handleChange}
              background={this.props.background}
              // className="ColorInput"
              // color={this.props.color}
              sp1={nums}
              key={nums}
              type="color"
              // defaultValue={colors[col]}
              class={classes[col]}
              //   value="red"
            />
          );
        })}
        {/* one parethesis for return.. one curly for the funct... another parenthesis for map... and the blue curly THEN closing header */}
      </header>
    );
  }
}
export default HeaderButtons;
