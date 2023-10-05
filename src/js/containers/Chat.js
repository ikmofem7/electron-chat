import React from "react";
import ChatUserList from "../components/ChatUserList";
import { ViewTitle } from "../components/shared/ViewTitle";
import { ChatMessagesList } from "../components/ChatMessagesList";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { id } = useParams();

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle title={`Joined Channel ${id}`} />
        <ChatMessagesList />
      </div>
    </div>
  );
};

export { Chat };
