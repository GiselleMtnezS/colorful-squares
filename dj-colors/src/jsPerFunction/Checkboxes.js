import React from "react";
// class CheckBoxes extends React.Component {
//   render() {
//     const color = this.props.color;
//     console.log(color);
//     return (
//       <div className={this.props.className}>
//         <span>{this.props.sp1}</span>
//         <input
//           value={
//             this.props.class === "input1"
//               ? this.props.color1
//               : this.props.class === "input2"
//               ? this.props.color2
//               : this.props.class === "input3"
//               ? this.props.color3
//               : this.props.class === "input4"
//               ? this.props.color4
//               : console.log("blue")
//           }
//           style={{
//             borderColor: color === "" ? "white" : "none"
//           }}
//           type={this.props.type}
//           onChange={this.props.handleChange}
//           className={this.props.class}
//         />
//       </div>
//     );
//   }
// }

////my checkbox app() function
// function App() {
//     return (
// <div>
//             <input type="checkbox" />
//             <p>Placeholder text here</p>

//             <input type="checkbox" />
//             <p>Placeholder text here</p>

//             <input type="checkbox" />
//             <p>Placeholder text here</p>

//             <input type="checkbox" />
//             <p>Placeholder text here</p>
//         </div>
//     )
// }
// export default App;
// const numbers = ["1", "2", "3", "4"];
class CheckBoxes extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     color1: "",
  //     color2: "",
  //     color3: "",
  //     color4: ""
  //   };
  // }
  // handleChange = event => {
  //   this.setState = {
  //     color1: event.target.value,
  //     color2: event.target.value,
  //     color3: event.target.value,
  //     color4: event.target.value
  //   };
  //   console.log(this.state.color1);
  //   console.log(this.state.color2);
  //   console.log(this.state.color3);
  //   console.log(this.state.color4);
  // };

  render() {
    return (
      <div>
        <input
          type={this.props.type}
          className={this.props.class}
          value={
            this.props.class === "input1"
              ? this.props.color1
              : this.props.class === "input2"
              ? this.props.color2
              : this.props.class === "input3"
              ? this.props.color3
              : this.props.class === "input4"
              ? this.props.color4
              : console.log("blue")
          }
          onChange={
            this.props.class === "input1"
              ? event => this.props.handleChange1(event)
              : this.props.class === "input2"
              ? event => this.props.handleChange2(event)
              : this.props.class === "input3"
              ? event => this.props.handleChange3(event)
              : this.props.class === "input4"
              ? event => this.props.handleChange4(event)
              : console.log("blue")
          }
        />
        <span>{this.props.sp1}</span>
      </div>
    );
  }
}
export default CheckBoxes;
