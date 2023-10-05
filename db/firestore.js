const { initializeApp } = require("firebase/app");
const { getAuth, signOut } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore/lite");
const { collection, addDoc } = require("firebase/firestore/lite");
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth();

const addUserProfileToDatabase = async (userProfile) => {
  try {
    const response = await addDoc(collection(db, "profiles"), {
      ...userProfile,
    });
    return JSON.stringify(response);
  } catch (error) {
    console.error("Error fetching collection:", error);
    throw error;
  }
};

const checkUserAuthenciated = () => {
  const user = auth.currentUser;
  if (user) {
    console.log({ user });
    return JSON.stringify(user);
  } else {
    // No user is signed in.
    console.log({ error: user });
    return user;
  }
};

const logoutUser = () => {
  return signOut(auth)
    .then((res) => {
      debugger;
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

module.exports = {
  db,
  addUserProfileToDatabase,
  checkUserAuthenciated,
  logoutUser,
};
