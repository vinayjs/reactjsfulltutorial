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
        this.brand = this.props.brand;
    }
    render() {
        return (
            <>
            <h2>My car is {this.brand}</h2>
            </>
        )
    }
}

export default Class;