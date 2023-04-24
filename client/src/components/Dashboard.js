import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';

export default function Dashboard({ id,darkMode }) {
  const { selectedConversation } = useConversations()

  const bg={height: '93.5vh',background:`${darkMode?'url("https://wallpapercave.com/wp/wp8092590.jpg")':'url("https://64.media.tumblr.com/53a35e7ed66f3159e01f3663af30706b/tumblr_ouztgbH0CG1vj8v9mo1_400.png")'}`}

  return (
    <div className="d-flex" style={bg}>
      <Sidebar id={id} darkMode={darkMode} />
      {selectedConversation && <OpenConversation darkMode={darkMode} />}
    </div>
  )
}
