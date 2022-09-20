import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";

const firebaseConfig : FirebaseOptions = {};

const app : FirebaseApp = initializeApp(firebaseConfig);

export default app;