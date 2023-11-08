import React from "react";

class Class extends React.Component {
    constructor(){
        super();
        this.state = {color : 'red'}
    }
    render() {
        
        return <h2> hi, this is a class component and my state is {this.state.color}</h2> 
    }

}

export default Class;