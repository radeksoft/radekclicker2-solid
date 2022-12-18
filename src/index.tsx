/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { attachDevtoolsOverlay } from '@solid-devtools/overlay';

import App from './App';

attachDevtoolsOverlay();

render(() => <App />, document.getElementById('root') as HTMLElement);
