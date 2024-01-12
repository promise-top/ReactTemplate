import { Navigate } from "react-router-dom";

export default function Authorization({ children }) {
  const token = true;
  return token ? <>{children}</> : <Navigate replace={true} to="/" />;
}
