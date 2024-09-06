import { createRoot } from 'react-dom/client'

import Card from './components/Card/Card';

import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <>
      <Card />
    </>
);
