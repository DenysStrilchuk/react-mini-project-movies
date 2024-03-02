import ReactDOM from 'react-dom/client';
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);

