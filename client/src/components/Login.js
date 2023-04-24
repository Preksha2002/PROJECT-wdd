import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit,darkMode }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }
  const bg={background:`${darkMode?'url("https://wallpapercave.com/wp/wp8092590.jpg")':'url("https://64.media.tumblr.com/53a35e7ed66f3159e01f3663af30706b/tumblr_ouztgbH0CG1vj8v9mo1_400.png")'}`}

  const bgForm={background:`${darkMode?'grey':'#d5e1df'}`,padding:'50px'}

  const text={color:`${darkMode?'white':'black'}`}

  const inputText={color:`${darkMode?'white':'black'}`,background:`${darkMode?'black':'white'}`}

  return (
    <div style={bg}>
    <Container className="align-items-center d-flex" style={{ height: '100vh'}}>
      <Form onSubmit={handleSubmit} className="w-100" style={bgForm}>
        <Form.Group>
          <Form.Label style={text}>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} style={inputText} required />
        </Form.Group>   
        <Button type="submit" className="mr-2" variant={`${darkMode?'danger':'primary'}`}>Login</Button>
        <Button onClick={createNewId} variant={`${darkMode?'dark':'secondary'}`}>Create A New Id</Button>
      </Form>
    </Container>
    </div>
  )
}
