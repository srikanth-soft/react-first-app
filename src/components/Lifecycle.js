import React, { Component } from 'react'

export default class Lifecycle extends  Component {
    constructor(props){
        super(props);
        this.state={
            show:true,
            count:0
        };
    }
    delHeader =() =>{
        this.setState({show:false});
    }
    componentDidMount(){
        console.log('componentDidmount method')
    }
    componentDidUpdate(){
        console.log('componentDidupdate method')
    }
    render() {
        let myheader;
        if (this.state.show){
            myheader = <Child />
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}  >Delete Header</button><br/><br/>
                <h3>count: {this.state.count}</h3><br/><br/>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Icrement</button>
            </div>
        )
    }
};


 class Child extends Component {
     componentWillUnmount(){
         console.log("component willmounted")
     }
    render() {
        return (
            <div>
                <h1>Hello World..!!</h1>
            </div>
        )
    }
}


