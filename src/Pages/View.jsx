import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


function View() {

  const {id} = useParams()

  const book = useSelector((state) => state.bookReducer.find((book)=>book.id===id))

  return (
    <>
      <div className="container p-1"  style={{marginTop:"9rem"}}>
        <Row>
            <Col className="col-lg-1"></Col>
            <Col className="col-lg-4">
                <img src={book.coverImage} alt=""  style={{height:'100%',width:'100%'}}/>
            </Col>
            <Col className="col-lg-6">
                <p>Book Id: {book.id}</p>
                <h1>{book.title}</h1>
                <br />
                <h3>Author: {book.author}</h3>
                <p>{book.description}
                </p>
                <br />
                {/* <h3>Price <span className='text-danger'>$23</span></h3> */}

                <br />
                {/* <button className='btn btn-warning'>Add to Your Reading List</button> */}
            </Col>
            <Col className="col-lg-1"></Col>
        </Row>
      </div>
    </>
  )
}

export default View
