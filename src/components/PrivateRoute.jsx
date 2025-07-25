import React from "react";
import { Route, Redirect } from "react-router-dom";

// Η συνάρτηση αυτή ελέγχει αν ο χρήστης είναι συνδεδεμένος
const isAuthenticated = () => {
  // Μπορείς να προσαρμόσεις αυτόν τον έλεγχο ανάλογα με την εφαρμογή σου
  return !!localStorage.getItem("access_token");
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
