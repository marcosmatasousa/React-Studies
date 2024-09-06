import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ReactFacts from './components/ReactFacts/ReactFacts';

import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <ReactFacts />
    </StrictMode>
);
