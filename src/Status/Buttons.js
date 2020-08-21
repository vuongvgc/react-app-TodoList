import React from 'react';
import '../App.css';
class Buttons extends React.Component {
    render() {
        return(
            <div className="Button__status">
                <button 
                    className="Button__status-all" 
                    onClick={this.props.buttonHandle} 
                    value='all'>
                    All
                </button>
                <button 
                    className="Button__status-active" 
                    onClick={this.props.buttonHandle}
                    value='active'>
                    Active
                </button>
                <button 
                    className="Button__status-completed" 
                    onClick={this.props.buttonHandle}
                    value='completed'>
                    Completed
                </button>
            </div>
        )
    }
}
export default Buttons;