// Actionを定義
// Presentational Componentで発火させたリスナーの引数の値が入る
export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

// Actionを定義
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});
