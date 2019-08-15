import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {render} from 'react-dom';
import {createBrowserHistory} from 'history';
import {rootReducer} from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import {BrowserRouter as Router} from 'react-router-dom';

const history = createBrowserHistory();

// createStoreを使ってStoreを生成する
const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), logger)
  )
);

render (
  // reduxのStore自身を全てのコンポーネントに対して渡すために、Providerコンポーネントでルートコンポーネントをラップする
  // ルートコンポーネント配下にぶら下がっている要素に対してもStoreを渡せる
  // createStoreで作成したstoreをProviderに渡して、ルートコンポーネントをラップする
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <TodoApp />
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
