import React from 'react';
import Proptypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";
import styles from '../pages/scoreboard/Scoreboard.module.css'
import classNames from 'classnames';

class Counter extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    const {changeScore, score, id} = this.props;

    //let addBtnClass = 'counter-action' + '' + 'decrement';
    return (
      <div className={styles.counter}>
        <button className={classNames(styles["counter-action"], styles.decrement)}
                onClick={() => changeScore(id, -1)}> - </button>
        <span className={styles["counter-score"]}>{score}</span>
        <button className={classNames(styles["counter-action"], styles.increment)}
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

export default connect(null, {changeScore})(Counter);