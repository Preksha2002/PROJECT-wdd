import React,{useState} from 'react'
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import { Form} from 'react-bootstrap'

function App() {
  const [id, setId] = useLocalStorage('id')
  const [darkMode,setDarkMode]=useState(false)

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} darkMode={darkMode} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  function handleClick(){
    if(darkMode){
      setDarkMode(false)
    }else{
      setDarkMode(true)
    }
  }

  const ncolor={color:`${darkMode?'white':''}`,background:`${darkMode?'#272222':''}`,fontSize:'1.5rem',padding:'4px 2px 0px 4px'}

  return (
    <div>
      <nav className="d-flex" style={ncolor}>
        <ul style={{marginBottom:'0.5rem'}}>
          <li style={{listStyle:'none'}}>Talk-a-tive</li>
        </ul>
        <Form style={{marginLeft:'1200px',marginTop:'5px',fontSize:'20px'}}>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="DarkMode"
            onClick={handleClick}
          />
       </Form>
      </nav>
    {id ? dashboard : <Login onIdSubmit={setId} darkMode={darkMode} />}
    </div>
  )
}

export default App;
