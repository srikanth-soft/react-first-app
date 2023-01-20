import React, {Component} from 'react'

class Messege extends Component {
constructor(){
    super()
    this.state ={
        messege: 'Welcome visitor'
    }
}
 changeMessege(){
     this.setState({
         messege:'Thank for subscribing'
     })
 }
    render() {
        return(
            <div>
                <h1>{this.state.messege}</h1>
                <button onClick={() => this.changeMessege()}>subscribe</button>
            </div>
        ) 
    }
}
export default Messege