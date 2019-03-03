import React from 'react';


export class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName : ''
    }
  }

  handleValueChange = (e) => {
    this.setState({playerName: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault(); //submit의 기본 동작 차단
    this.props.addPlayer(this.state.playerName);
    this.setState({playerName:''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.playerName}
               onChange={this.handleValueChange}
               placeholder="enter a player's name:" required/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}