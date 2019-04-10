// action types
export const ADD_TODO = 'ADD_TODO'
export const TODDLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

function toggle_todo(index){
  return {
    type: TOGGLE_TODO,
    index
  }
}


function set_visibility(filter) {
  return {
    type: SET_VISIBILITY,
    filter
  }
}