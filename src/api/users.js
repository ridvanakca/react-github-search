import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const users = {
  signUp: signUp,
  signIn: signIn,
};

export default users;
