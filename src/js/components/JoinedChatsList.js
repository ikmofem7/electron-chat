import React from "react";
import ChatSearch from "./ChatSearch";
import { useNavigate } from "react-router-dom";

const JoinedChatsList = ({ chats }) => {
  const navigate = useNavigate();
  return (
    <div className="list-container">
      <ChatSearch />
      <ul className="items">
        {chats.map((chat) => {
          const { id, name } = chat;
          return (
            <li
              key={id}
              onClick={() => navigate(`/chat/${id}`)}
              className="item"
            >
              <div className="item-status">
                <img
                  src="https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg"
                  alt="Retail Admin"
                />
                <span className="status online"></span>
              </div>
              <p className="name-time">
                <span className="name mr-2">{name}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { JoinedChatsList };
