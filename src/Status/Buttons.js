import React from 'react';
import '../App.css';
class Buttons extends React.Component {
    render() {
        const statusCurrent = this.props.status;
        return(
            <div className="Button__status">
                <button 
                    className={statusCurrent ==='all' ? 'Button__status-active'  :'Button__status-not-active'} 
                    onClick={this.props.buttonHandle} 
                    value='all'>
                    All
                </button>
                <button 
                    className={statusCurrent ==='active' ? 'Button__status-active'  : 'Button__status-not-active'} 
                    onClick={this.props.buttonHandle}
                    value='active'>
                    Active
                </button>
                <button 
                    className={statusCurrent ==='completed' ? 'Button__status-active'  :'Button__status-not-active'} 
                    onClick={this.props.buttonHandle}
                    value='completed'>
                    Completed
                </button>
            </div>
        )
    }
}
export default Buttons;