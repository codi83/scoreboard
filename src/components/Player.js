import React from "react";
import Counter from "./Counter";
import PropTypes from 'prop-types';

export class Player extends React.Component{

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    score: PropTypes.number,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
  }

  render() {
    console.log(this.props.name, 'rendered');

    const {removePlayer, name, score, id, changeScore} = this.props;

    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
      </span>
        <span className="player-name">
        {name}
      </span>
        <Counter score={score}
                 id={id}
                 changeScore={changeScore}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // console.log('componentWillReceiveProps: ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log(nextProps);
    return nextProps.score !== this.props.score;
  }
};
