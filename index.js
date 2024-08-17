import React from "react";
import {createRoot} from "react-dom/client"

const App = () => <p>Hello, This is flux example.</p>;

const root = createRoot(document.getElementById('app'))

root.render(<App />);