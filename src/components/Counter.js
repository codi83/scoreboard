import React from 'react';
import Proptypes from 'prop-types';


export class Counter extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    const {changeScore, score, id} = this.props;

    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => changeScore(id, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment"
                onClick={() => changeScore(id, 1)}> + </button>
      </div>
    );
  }

}

Counter.propTypes = {
  id: Proptypes.number,
  score: Proptypes.number,
  changeScore: Proptypes.func
}