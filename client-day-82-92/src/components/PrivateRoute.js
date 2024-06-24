// import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const { isAuthenticated } = useAuth();

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
//             }
//         />
//     );
// };

// // Usage in your routes
// <PrivateRoute exact path="/dashboard" component={Dashboard} />
