import React, { Component } from 'react';
import Counter from './Counter.jsx';

const style = {
    margin: '20px'
};

class ControlPanel extends Component {

    constructor(props) {
        super(props);

        this.onCounterUpdate = this.onCounterUpdate.bind(this);
         //initValues数组记录所有Counter的初始值
         this.initValues = [ 0, 10, 20];
         //将initValues数组中的所有值加在一起,作为this.state中sum字段的初始值
         const initSum = this.initValues.reduce((a, b) => a+b, 0);
        this.state = {
            sum: initSum
        };
    }

    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({ sum: this.state.sum + valueChange});
    }

    render() {
        return (
            <div style={style}>
                <Counter onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[0]} />
                <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
                <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />
                <hr/>
                <div>Total Count: {this.state.sum}</div>
            </div>
        );
    }
}

export default ControlPanel;
