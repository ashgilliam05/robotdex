import React from 'react';  //View library - the core of the package.
import ReactDOM from 'react-dom';  //Websites.  Can use ReactNative for mobile.
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';  //Allows apps to run faster or when not online.
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
