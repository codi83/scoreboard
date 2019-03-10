import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";


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

  //플레이어 추가하는 메서드
  handleAddPlayer = (name) =>{
    console.log(name);
    //player id 최대값 찾기
    let maxId = 0;
    //this.state.players.forEach(item => item.id > maxId ? maxId = item.id : '');
    this.state.players.forEach(item => {
      maxId = item.id;
    });

    //추가
    this.setState({
      players: [
        ...this.state.players,
        //{id: maxId + 1, name: name, score:0}
        {id: maxId + 1, name, score:0}  //키와 value가 같으면 하나만 써도 됨.
      ]
      })
    }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />

        {/*Players List*/}
        { this.state.players.map(item =>
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

export default App;
