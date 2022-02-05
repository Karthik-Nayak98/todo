import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const DB_CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = firebase.initializeApp(DB_CONFIG);
app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export { app };
export const auth = firebase.auth();
export const database = firebase.database();
