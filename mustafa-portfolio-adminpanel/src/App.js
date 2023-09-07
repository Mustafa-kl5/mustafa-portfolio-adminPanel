import "./App.css";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { setAuthToken } from "./components/auth/setAuth";
import { PrivateRoutes } from "./routes/privateRoute";
import { publicRoutes } from "./routes/publicRoutes";
import RouteGuard from "./components/auth/RouteGuard";
import { ToastContainer } from "react-toastify";

function App() {
  setAuthToken();
  return (
    <>
      <Routes>
        {publicRoutes.map((routeItem) => {
          return (
            <Route
              key={routeItem.pathName}
              path={routeItem.pathName}
              element={routeItem.element}
            />
          );
        })}
        {PrivateRoutes.map((routeItem) => {
          return (
            <Route
              key={routeItem.pathName}
              element={<RouteGuard>{routeItem.element}</RouteGuard>}
              path={routeItem.pathName}
            />
          );
        })}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
