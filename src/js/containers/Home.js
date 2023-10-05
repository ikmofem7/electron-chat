import React, { useEffect } from "react";
import { JoinedChatsList } from "../components/JoinedChatsList";
import { AvailableChatsList } from "../components/AvailableChatsList";
import { ViewTitle } from "../components/shared/ViewTitle";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchChats } from "../reducer/chatsSlice";

const Home = () => {
  const chats = useSelector((state) => state.chats.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncFetchChats());
  }, []);
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChatsList chats={chats} />
      </div>
      <div className="col-9 fh">
        <ViewTitle title="Choose your channel" />
        <div className="container-fluid">
          <AvailableChatsList chats={chats} />
        </div>
      </div>
    </div>
  );
};
export { Home };
