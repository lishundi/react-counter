import React, { Component } from 'react';
import PropTypes from 'prop-types';
const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {

    constructor(props) {
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue
        }
    }
    //点击+按钮之后的一系列操作
    onClickIncrementButton() {
        this.updateCount(true);
        // const previousValue = this.state.count;
        // const newValue =  previousValue + 1;
        // this.setState({count: newValue})
        // this.props.onUpdate(newValue, previousValue)
    }
    //点击-按钮之后的一系列操作
    onClickDecrementButton() {
        this.updateCount(false);
        // const previousValue = this.state.count;
        // const newValue =  previousValue - 1;
        // this.setState({count: newValue})
        // this.props.onUpdate(newValue, previousValue)
    }

    updateCount(isIncrement) {
        //获取原状态
        const previousValue = this.state.count;
        //原状态+1或-1
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        //更新状态
        this.setState({count: newValue})
        //调用函数更新总和
        this.props.onUpdate(newValue, previousValue)
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f //什么都不做的函数
};

export default Counter;
