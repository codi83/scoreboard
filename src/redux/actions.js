//actions creator: 액션을 생성하는 함수
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionTypes";

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title
})

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
})

export const changeScore = (index, delta) => ({
  type : CHANGE_SCORE,
  index,
  delta
})

export const removePlayer = (id) => ({
  type:REMOVE_PLAYER,
  id
})