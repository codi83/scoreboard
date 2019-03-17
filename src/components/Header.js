import React from "react";
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";


const Header = ({title, players}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <Stopwatch></Stopwatch>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    score: PropTypes.number,
    name: PropTypes.string
  }))
}

Header.defaultProps ={
  title: 'Scoreboard'
}

let mapStateToProps = (state) => ({
  title: state.playerReducer.title
});

/*let mapActionToProps = (dispatch) => ({
  updateTitle: () => dispatch(updateTitle(name))
})*/

export default connect(mapStateToProps, {updateTitle})(Header);