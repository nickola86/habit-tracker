import * as React from 'react'
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot, useRecoilValue } from 'recoil';
import App from "./App";
import { I18nextProvider } from 'react-i18next';
import './i18n/i18n';
import ReactGA from 'react-ga4'

ReactGA.initialize("G-5V3F849KSL");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <RecoilRoot>
        <App/>
      </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
