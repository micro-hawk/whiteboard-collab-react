import React from "react";
import Board from "../board/Board";
import "./style.css";

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  colorF() {
    var theInput = document.getElementById("favcolor");
    var theColor = theInput.value;

    const colorINPUT = {
      rgb: theColor,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="color-picker-container">
          <input type="color" name="favcolor" value="" id="favcolor"></input>
        </div>
        <div className="board-container">
          <Board />
        </div>
      </div>
    );
  }
}

export default Container;
