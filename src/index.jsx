import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() => console.log(store.getState()));

const render = Component => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
/*eslint-enable */
