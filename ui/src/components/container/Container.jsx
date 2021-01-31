import React from 'react';
import Board from '../board/Board';
import './style.css';

class Container extends React.Component{
    constructor (props) {
        super(props);
    }

    render(){
        return <div className="container">
            <div className="color-picker-container">
                <input type="color" />
            </div>
            <div className="board-container">
            <Board />
            </div>
        </div>
    }

}

export default Container;