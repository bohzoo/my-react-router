// Container Componentにはロジックのみ書くのが基本

import {connect} from 'react-redux';
// Presentailnal Component
import TodoApp from '../components/TodoApp';
// Action
import {inputTask, addTask} from '../actions/tasks';

// Reduxのデータフローで管理されるStateツリーオブジェクトを監視する
// mapStateToPropsを書いておけばState情報をPropsとして扱うことができる
// 親コンポーネントから子へ引き継がなくても、子からすぐに使うことができる
const mapStateToProps = state => {
  // return {
  //   task: state.task,
  //   tasks: state.tasks,
  // };

  // なんでこうなるの？
  return {
    task: state.tasks.task,
    tasks: state.tasks.tasks,
  };
}

// Actionがdispatchへ渡る関数を準備している
// mapDispatchToPropsを使えば、孫コンポーネントでアクションを発火していても親->子->孫と繋と繋ぐ必要はない
// 孫コンポーネントで発火させるとしても、定義したアクションクリエイターから即呼び出せるようになる
const mapDispatchToProps = dispatch => {
  return {
    // ActionCreatorsのaddTaskを利用するためにaddTask関数を作成する
    addTask: (task) => dispatch(addTask(task)),
    // ActionCreatorsのinputTaskを利用するためにinputTask関数を作成する
    inputTask: (task) => dispatch(inputTask(task)),
  };
}

// connectメソッドを使用することで、Storeと接続された状態のコンポーネントとして返却される
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
