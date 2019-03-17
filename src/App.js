import React from 'react';
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";


class App extends React.Component {

/*  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }*/

  //증가 혹은 감소하는 핸들러 메서드
/*  handleChangeScore = (id, delta) =>{
    console.log(id, delta);
    this.setState(prevState => ({
      players: prevState.players.map(item => {
        if(item.id === id){
          item.score = item.score + delta;
        }
        return item;
      })
    }));
  }*/

  //플레이어 추가하는 메서드
/*  handleAddPlayer = (name) =>{
    console.log(name);
    //player id 최대값 찾기
    let maxId = 0;
    //this.props.players.forEach(item => item.id > maxId ? maxId = item.id : '');
    this.props.players.forEach(item => {
      maxId = item.id;
    });

    //추가
    this.setState({
      players: [
        ...this.props.players,
        //{id: maxId + 1, name: name, score:0}
        {id: maxId + 1, name, score:0}  //키와 value가 같으면 하나만 써도 됨.
      ]
      })
    }*/

  render() {
    return (
      <div className="scoreboard">
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

export default connect(mapStateToProps)(App);
