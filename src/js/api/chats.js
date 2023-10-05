const { firestore } = electron;

const fetchChats = async () => {
  try {
    const response = await firestore.get_collection("chats");
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { fetchChats };
