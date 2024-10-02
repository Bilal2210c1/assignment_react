import Reactdom from 'react-dom/client';
import App from './App';


const AppRoot = Reactdom.createRoot(document.getElementById('Root'));

AppRoot.render(<App/>);