
import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
        <Navbar expand="lg" className="bg-primary  text-light" fixed='top'>
      <Container fluid className='d-flex justify-content-between'>
        <Navbar.Brand className='text-light'>Book-Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <div className="d-flex ms-auto"></div>

            <input type="text" className='rounded p-3 m-1 w-25' placeholder='Search..' />

            <Link to ={'/add'} className='btn btn-outline-light'>Add Book</Link>
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
