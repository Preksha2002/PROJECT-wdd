import React, { useState, useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import url from 'socket.io-client/lib/url';
import { useConversations } from '../contexts/ConversationsProvider';

export default function OpenConversation({darkMode}) {
  const [text, setText] = useState('')
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations()

  function handleSubmit(e) {
    e.preventDefault()

    sendMessage(
      selectedConversation.recipients.map(r => r.id),
      text
    )
    setText('')
  }

  const textStyling={color:`${darkMode?'white':'black'}`,background:`${darkMode?'grey':'white'}`,height: '75px', resize: 'none'}

  const bg={background:`${darkMode?'url("https://wallpapercave.com/wp/wp8092590.jpg")':'url("https://64.media.tumblr.com/53a35e7ed66f3159e01f3663af30706b/tumblr_ouztgbH0CG1vj8v9mo1_400.png")'}`}

  const oMsgText={color:`${darkMode?'white':'black'}`,background:`${darkMode?'grey':'white'}`}

  const meMsgText={color:`${darkMode?'white':'black'}`,background:`${darkMode?'red':'#81BFE6'}`}

  return (
    <div className="d-flex flex-column flex-grow-1" style={bg}>
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
              >
                <div
                  className={`rounded px-2 py-1 `}
                  style={{color:`${message.fromMe?meMsgText.color:oMsgText.color}`,background:`${message.fromMe?meMsgText.background:oMsgText.background}`}}>
                  {message.text}
                </div>
                <div className={`small ${message.fromMe ? 'text-right' : ''}`} style={{color:oMsgText.color}}>
                  {message.fromMe ? 'You' : message.senderName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={e => setText(e.target.value)}
              style={textStyling}
            />
            <InputGroup.Append>
              <Button type="submit" variant={`${darkMode?'danger':'primary'}`}>Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}
