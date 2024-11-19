import {useContext} from "react";
import AuthContext from "../FirebaseProvider/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
