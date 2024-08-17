import React from "react";
import {createRoot} from "react-dom/client";
import { Forum } from "./src/components/Forum";

const root = createRoot(document.getElementById('app'));

root.render(<Forum />);