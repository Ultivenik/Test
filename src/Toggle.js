import React, { Component } from 'react';
// import Content from './Content'

class Toggle extends Component{
    state = {
        on: false
    }

    toggle = ()=>{
        this.setState({
            on: !this.state.on
        })
    }  

    render(){
        return(
            <div className="select">
                <p onClick={this.toggle}>VEUILLEZ SÉLECTIONNER</p>
    
                {this.state.on && this.props.children }

            </div>
        )
    }
}
export default Toggle