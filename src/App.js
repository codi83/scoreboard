import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";


class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score:0, id: 1},
      {name: 'HONG', score:0, id: 2},
      {name: 'KIM', score:0, id: 3},
      {name: 'PARK', score:0, id: 4},
    ]
  };
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  //증가 혹은 감소하는 핸들러 메서드
  handleChangeScore = (id, delta) =>{
    console.log(id, delta);
    this.setState(prevState => ({
      players: prevState.players.map(item => {
        if(item.id === id){
          item.score = item.score + delta;
        }
        return item;
      })
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item =>
          <Player name={item.name}
                   key={item.id.toString()} removePlayer={this.handleRemovePlayer}
                    score={item.score} id={item.id}
                    changeSocre={this.handleChangeScore}/>)
        }
      </div>
    );
  }
}

export default App;
