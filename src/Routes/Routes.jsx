import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Resume from "../Components/Resume/Resume";





const router = createBrowserRouter([




    {
        path: '/',
        element: <App />,
       
    },
    {
        path: 'resume',
        element: <Resume/>,
    },
])

export default router;