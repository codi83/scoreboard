import React from 'react';
import Player from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";
import {connect} from "react-redux";
import Header from "../../components/Header";
import styles from './Scoreboard.module.css';


class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="style.scoreboard">
        <Header title="My scoreboard" players={this.props.players} />

        {/*Players List*/}
        { this.props.players.map(item =>
          <Player name={item.name}
                  key={item.id.toString()} removePlayer={this.handleRemovePlayer}
                  score={item.score} id={item.id}
                  changeScore={this.handleChangeScore}/>)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  players:state.playerReducer.players
})

export default connect(mapStateToProps)(Scoreboard);