import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBook } from '../Redux/Slice/BookSlice'



function Home() {

  const books = useSelector((state)=>state.bookReducer)
  const dispatch= useDispatch()
  const handleDelete =(id) => {
    dispatch(deleteBook(id))
  }

  console.log(books);
  
  return (
    <>
    <div className="container-fluid" style={{marginTop:'9rem'}}>
      {
        books.length>0 ? (books.map((book)=>(
          <Card key={book.id} style={{ width: '18rem' }} >
                  <Link to={`/view/${book.id}`}>
                      <Card.Img variant="top" src={book.coverImage} />
                  </Link>
                
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <div className="d-flex justify-content-between">
                  <Button variant="danger" onClick={()=>handleDelete(book.id)}><i className="fa-solid fa-trash "></i></Button>
                  </div>
                </Card.Body>
          </Card>
        ))): <p>Nothing to display</p>
      }
        
    </div>
      
    </>
  )
}

export default Home
