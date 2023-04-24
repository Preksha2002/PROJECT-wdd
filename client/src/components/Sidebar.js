import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ id,darkMode }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
  const [modalOpen, setModalOpen] = useState(false)
  const conversationsOpen = activeKey === CONVERSATIONS_KEY
  
  function closeModal() {
    setModalOpen(false)
  }

  const sideBg={background:`${darkMode?'#685D5D':'#DDDDD8'}`,width:'250px'}

  const text={color:`${darkMode?'white':'black'}`}

  return (
    <div style={sideBg} className="d-flex flex-column" >
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey} >
        <Nav variant="tabs" className="justify-content-center" >
          <Nav.Item style={{}}>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations darkMode={darkMode} />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts darkMode={darkMode}/>
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small" style={text}>
          Your Id: <span>{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0" variant={`${darkMode?'danger':'primary'}`}>
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal>
    </div>
  )
}
