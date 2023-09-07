import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
export default function RouteGuard(props) {
  return useAuth() ? props.children : <Navigate to="/" />;
}
