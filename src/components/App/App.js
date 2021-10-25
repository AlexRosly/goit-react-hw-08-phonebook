import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "../AppBar/AppBar";
import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import { Loaders } from "../Loader/Loader";
import Container from "../Container/Container";
import PrivateRoute from "../Navigation/PrivateRoute";
import PublicRoute from "../Navigation/PublicRoute";
import NotFoundPage from "../../views/NotFoundPage";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
// import toast from "react-hot-toast";

const HomePage = lazy(() =>
  import("../../views/HomePage" /*webpackChunkName: "home-page"*/)
);
const SignUpPage = lazy(() =>
  import("../../views/SignUpPage" /*webpackChunkName: "home-page"*/)
);
const LoginPage = lazy(() =>
  import("../../views/LoginPage" /*webpackChunkName: "home-page"*/)
);
const ContactsPage = lazy(() =>
  import("../../views/ContactsPage" /*webpackChunkName: "home-page"*/)
);

export default function App() {
  const dispatch = useDispatch();
  // const error = useSelector(authSelectors.getError);

  const isRefreshCurrentUser = useSelector(
    authSelectors.getIsRefreshCurrentPage
  );

  useEffect(() => {
    dispatch(authOperations.reFreshCurrentPage());
  }, [dispatch]);

  // useEffect(() => {
  //   toast.error(error && "Invalid Authorization");
  // }, [error]);

  return (
    !isRefreshCurrentUser && (
      <Container>
        <AppBar />
        <Suspense fallback={<Loaders />}>
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <SignUpPage />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
            <PrivateRoute>
              <NotFoundPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}
