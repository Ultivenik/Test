import React, { Component } from 'react';
import Content from './Content';
import TailleNext from './TailleNext';
import TaillePrev from './TaillePrev';
import Toggle from './Toggle'

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInClick = this.handleChangeInClick.bind(this);
    this.handleChangeOutClick = this.handleChangeOutClick.bind(this);
    this.state = {isChanged: false};
  }

  handleChangeInClick() {
    this.setState({isChanged: true});
  }

  handleChangeOutClick() {
    this.setState({isChanged: false});
  }

  render() {
    const isChanged = this.state.isChanged;
    let button;

    if (isChanged) {
      button = <TailleNext onClick={this.handleChangeOutClick} />;
    } else {
      button = <TaillePrev onClick={this.handleChangeInClick} />;
    }

    return (
         <Toggle>
                <div className="optgroup">
                    <span>Taille:</span> 
                    {button}
                    <Content isChanged={isChanged} />
                </div>
         </Toggle>

    );
  }
}
export default Select;