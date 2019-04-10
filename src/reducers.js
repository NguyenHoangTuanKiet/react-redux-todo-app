import { combineReducers } from 'redux'


// Redux will call reducer with an undefined state for the first time.

import { VisibilityFilers } from './actions.js'

const { SHOW_ALL } = VisibilityFilers

const initialState = {
  visibilityFiler: VisibilityFilers.SHOW_ALL,
  todos: []
}



// function todoApp(state, action) {
//   if (typeof state === 'undefined') {
//     return initialState
//   }

//   // For now, don't handle any actions
//   // and just return the state given to us.
//   return state
// }


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })

    default:
      return state
  }
}

// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed
// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter),
//     todos: todos(state.todos, action)
//   }
// }


const todoApp = combineReducers({
  visibilityFilter,
  todos
})