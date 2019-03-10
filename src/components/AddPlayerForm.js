import React from 'react';


export class AddPlayerForm extends React.Component {
  textInput = React.createRef();

  constructor(props) {
    super(props);
    /*this.state = {
      playerName : ''
    }*/
  }

  /*handleValueChange = (e) => {
    this.setState({playerName: e.target.value})
  }*/

  handleSubmit = (e) => {
    console.log(e);
    //e.preventDefault(); //submit의 기본 동작 차단
    this.props.addPlayer(this.textInput.current.value);
    //폼초기화
    /*this.setState({playerName:''});*/
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput}
               /*onChange={this.handleValueChange}*/
               placeholder="enter a player's name:" required/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}