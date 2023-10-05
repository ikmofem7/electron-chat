const {
  db,
  addUserProfileToDatabase,
  checkUserAuthenciated,
  logoutUser,
} = require("./db/firestore");
const { collection, getDocs } = require("firebase/firestore/lite");
const { createUserWithEmailAndPassword } = require("firebase/auth");
const { getAuth } = require("firebase/auth");
const { ipcRenderer, contextBridge } = require("electron");
const auth = getAuth();
contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification: (expression) => {
      ipcRenderer.send("notify", message);
    },
  },
  firestore: {
    get_collection: async (name) => {
      try {
        const selected_collection = collection(db, name);
        const collection_snapshot = await getDocs(selected_collection);
        const collection_data = collection_snapshot.docs.map((doc) => {
          const id = doc.ref.id;
          return { id, ...doc.data() };
        });
        return collection_data;
      } catch (error) {
        console.error("Error fetching collection:", error);
        throw error;
      }
    },
    create_user: async (email, password) => {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        return JSON.stringify(user);
      } catch (error) {
        return Promise.reject(error.message);
      }
    },
    create_user_profile: addUserProfileToDatabase,
    on_auth_stage_changes: checkUserAuthenciated,
    logout_user: logoutUser,
  },
});
