import { createRoot } from 'react-dom/client'

import Card from './components/Card/Card';
import ReactFacts from './components/ReactFacts/ReactFacts';
import AirBnbExp from './components/AirBnbExp/AirBnbExp';

import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <>
      <AirBnbExp />
    </>
);
