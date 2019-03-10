import {ADD_PLAYER, UPDATE_TITLE} from "../actionTypes";

const initialState = {
  title: 'Redux Score',
  players: [
    {name: 'LDK', score:0, id: 1},
    {name: 'HONG', score:0, id: 2},
    {name: 'KIM', score:0, id: 3},
    {name: 'PARK', score:0, id: 4},
  ]
}

let playerId = 4;

export const playerReducer = (state = initialState, action) =>{
  switch ((action.type)) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.nave,
            score: 0,
            id: ++playerId
          }
        ]
      }
    default:
      return state;
  }
}