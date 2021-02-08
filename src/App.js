import React from "react";
//import "./materialize/css/materialize.css";
import "./materialize-src/sass/materialize.scss";
import "./App.css";
// import MyComponent from "./03/MyComponent";
// import MyPureComponent from "./03/MyPureComponent";
// import SFCTodaysPlanApp from "./03/SFCTodaysPlanApp";
// import ListExample from "./03/ListExample";
// import Counter from "./03/CounterApp";
// import Counter from "./03/Counter3";
import Input from "./03/Input";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>Do it!</div>
          </div>
        </nav>
        <h1>Material CSS</h1>
      </div>
    );
  }
}

// import React from "react";
// import MyComponent from "./03/MyComponent";
// import MyPureComponent from "./03/MyPureComponent";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.listValue = [{ name: "Park" }, { name: "Lee" }];
//     this.state = { version: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     setTimeout(() => {
//       this.listValue[0].name = "Justin";
//       this.setState({ version: 1 });
//     }, 100);
//     setTimeout(() => {
//       this.listValue = [{ name: "Justin" }, { name: "Lee" }];
//       this.setState({ version: 2 });
//     }, 200);
//   }
//   render() {
//     return (
//       <div className="body">
//         <MyComponent value={this.listValue} />
//         <MyPureComponent value={this.listValue} />
//         <button onClick={this.handleClick}>btn </button>
//       </div>
//     );
//   }
// }
