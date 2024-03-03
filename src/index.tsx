import ReactDOM from 'react-dom/client';
import {router} from "./router";
import {RouterProvider} from "react-router-dom";

import './index.css';
import {ThemeProvider} from "./components";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
);

