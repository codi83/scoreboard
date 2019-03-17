import React from 'react';
import axios from "axios";

export class Hero extends React.Component {
  hero_id;

  constructor(props) {
    super(props);

    console.log(this.props);

    this.state ={
      hero:null
    }
  }

  render() {
    return (
      <div>
        {
          this.state.hero ? <div>
            <div className="form-group mt-1">
              <label htmlFor="name">Name:</label>
              <p className="form-control form-control-sm" id="name">{this.state.hero.name}</p>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="email">Email Address:</label>
              <p className="form-control form-control-sm" id="email">{this.state.hero.email}</p>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="sex">Sex:</label>
              <p className="form-control form-control-sm" id="sex">{this.state.hero.sex}</p>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="country">Country:</label>
              <p className="form-control form-control-sm" id="country">{this.state.hero.country}</p>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="power">Power:</label>
              <p className="form-control form-control-sm" id="power">{this.state.hero.power}</p>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="power">Photo:</label>
              {
                this.state.hero.photo ? <img src={this.state.hero.photo} alt={this.state.hero.name}></img> : ''
              }
            </div>
          </div>: ''
        }
      </div>
    );
  }

  async getHero(){
    const res = await axios.get(`http://eastflag.co.kr:8080/api/hero/${this.hero_id}`);
    this.setState({hero:res.data});
  }

  componentDidMount() {
    //hero id추출
    this.hero_id = this.props.match.params.hero_id;
    //this.getHero(this.props.match.params['hero_id']);

    //서버에 api를 호출하여 hero 데이터 획득 후 상태 정보 갱신
    this.getHero();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps);
    if(this.hero_id !== nextProps.match.params.hero_id){
      this.hero_id = nextProps.match.params.hero_id;
      this.getHero();
    }
  }
}
