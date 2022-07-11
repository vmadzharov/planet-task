import HomePage from "./HomePage";
import Login from "./Login";

const routes = Object.freeze({
    login:{
        path:'/',
        element: <Login/>,
        private: false
    },
    homepage: {
        path: '/homepage',
        element: <HomePage />,
        private: true
    }
});

export default routes;