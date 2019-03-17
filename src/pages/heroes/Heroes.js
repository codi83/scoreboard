import React from 'react';
import axios from "axios";


export class Heroes extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      heroes:[]
    }
  }

  render() {
    return (
      <ul>
        {
          this.state.heroes.map(hero => (
            <li key={hero.hero_id}>
              <img src={hero.photo} alt={hero.name}></img>
              <span>{hero.name}</span>
            </li>
          ))
        }
      </ul>
    );
  }

  async getHeroes(){
    //hero 목록 가져오기.
    //promise 패턴
    // axios.get('http://eastflag.co.kr:8080/api/heroes')
    //   .then(res => this.setState({heres:res.data}))

    const res = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    this.setState({heres:res.data});
  }

  componentDidMount() {
    this.getHeroes();
  }
}