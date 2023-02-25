import axios from "axios";
import { useEffect, useState, React } from "react";

const ChatPage = () => {
    const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const {data} = await axios.get("http://127.0.0.1:5000/api/chat", {
    });
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return <div>{chats.map((e) => (
    <div key={e._id}>
        {e.chatName}
    </div>
  ))}</div>;
};

export default ChatPage;
