import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

export const initialState = {
  task: '',
  tasks: []
}

// Reducerを定義
function tasksReducer(state=initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        // ...stateの記述により、同じキーがあった場合には後ろに書いた方に上書きされる
        ...state,
        task: action.payload.task
        // 上記は以下の書き方と同じ
        // task: action.payload.task,
        // tasks: state.tasks
      }
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
        // 上記は以下の書き方と同じ
        // task: state.task,
        // tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

export const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  tasks: tasksReducer
});
