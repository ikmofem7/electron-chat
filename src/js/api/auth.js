const { firestore } = electron;

const registerUser = async (email, password) => {
  try {
    const response = await firestore.create_user(email, password);
    return JSON.parse(response);
  } catch (error) {
    console.log({ error });
    return error.message;
  }
};

const createUserProfile = async (userProfile) => {
  try {
    const response = await firestore.create_user_profile(userProfile);
    return response;
  } catch (error) {
    console.log({ error });
    return error.message;
  }
};

const onAuthStateChanges = async (onAuth) => {
  try {
    const response = await firestore.on_auth_stage_changes(onAuth);
    return response;
  } catch (error) {
    console.log({ error });
    return error.message;
  }
};

const logoutUser = async () => {
  try {
    const response = await firestore.logout_user();
    return response;
  } catch (error) {
    console.log({ error });
    return error.message;
  }
};

export { registerUser, createUserProfile, onAuthStateChanges, logoutUser };
