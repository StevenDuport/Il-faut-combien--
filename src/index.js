import { render } from 'react-dom';

import { Provider } from 'react-redux'
import store from './store'

import App from 'src/components/App';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
