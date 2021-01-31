import React from "react";
import "./style.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.drawOnCan();
  }
  drawOnCan() {
    var canvas = document.querySelector("#paint");
    var ctx = canvas.getContext("2d");

    var sketch = document.querySelector("#sketch");
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue("width"));
    canvas.height = parseInt(sketch_style.getPropertyValue("height"));

    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    /* Mouse Capturing Work */
    canvas.addEventListener(
      "mousemove",
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      }
      //   false
    );

    /* Drawing on Paint App */
    ctx.lineWidth = 10;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "green";

    canvas.addEventListener(
      "mousedown",
      function (e) {
        canvas.addEventListener("mousemove", onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      "mouseup",
      function () {
        canvas.removeEventListener("mousemove", onPaint, false);
      },
      false
    );

    var onPaint = function () {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      ctx.stroke();
    };
  }
  render() {
    return (
      <div className="sketch" id="sketch">
        <canvas id="paint"></canvas>
        <canvas className="board" id="board"></canvas>
      </div>
    );
  }
}

export default Board;
