import React from "react";

class Class extends React.Component {
    constructor(){
        super();
        this.state = {color : 'red'}
    }
    render() {

        return (
            <>
            <h2> hi, this is a class component and my state is {this.state.color}</h2>
            <Car brand='benz' />
            </>
        ) 
    }

}


class Car extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            model: 'gt',
            year: 2020,
            color: 'blue'
        }
    }
    changeColor = () => {
        this.setState({color: 'red'})
    }
    render() {
        return (
            <>
            <h2>My car is {this.props.brand}</h2>
            <h3>My car's color is {this.state.color}</h3>
            <button onClick={this.changeColor}>fav color</button>
            </>
        )
    }
}

export default Class;