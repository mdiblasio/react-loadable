import React from 'react';
import {ReactDOM, hydrate} from 'react-dom';
import App from './components/app';
import { loadableReady } from '@loadable/component'

// function init(component) {
//   ReactDOM.render(
// 	<App />,
//     document.getElementById('react-root')
//   );
// }

// function init() {
// 	hydrate(
// 		<App />, 
// 		document.getElementById('react-root')
// 	);
// }

// init();


loadableReady(() => {
  hydrate(<App />, document.getElementById('react-root'))
})

