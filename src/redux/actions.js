//actions creator: 액션을 생성하는 함수
import {ADD_PLAYER, UPDATE_TITLE} from "./actionTypes";

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title
})

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
})