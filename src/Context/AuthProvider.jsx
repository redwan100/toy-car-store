import { createContext, useEffect, useState } from "react";import Swal from "sweetalert2";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,

} from "firebase/auth";
import app from "../firebase/firebase.config";

// CREATE CONTEXT
export const AuthContext = createContext();

// CREATE AUTH
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

   const handleTost = () => {
     if (!user) {
       Swal.fire({
         position: "top",
         icon: "error",
         title: "Please Login first",
         showConfirmButton: false,
         timer: 1200,
       });
     }
   };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    userSignIn,
    logOut,
    loading,
    googleSignIn,
    handleTost,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
