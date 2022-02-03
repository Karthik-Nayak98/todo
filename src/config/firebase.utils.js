import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const DB_CONFIG = {
  apiKey: "AIzaSyB8nD0nu2jG0cmyvLRBs3XgFwOg0b0cq8I",
  authDomain: "todo-app-8c85e.firebaseapp.com",
  databaseURL: "https://todo-app-8c85e.firebaseio.com",
  projectId: "todo-app-8c85e",
  storageBucket: "todo-app-8c85e.appspot.com",
  messagingSenderId: "125772070027",
  appId: "1:125772070027:web:1ffe3fd0560663a286288e",
  measurementId: "G-KVNZJWDRBQ",
};

const app = firebase.initializeApp(DB_CONFIG);
app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export { app };
export const auth = firebase.auth();
export const database = firebase.database();
