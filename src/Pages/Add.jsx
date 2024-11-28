import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../Redux/Slice/BookSlice'



function Add() {

    const [book,setBook]=useState({
        id:'',
        title:"",
        author:"",
        genre:"",
        coverImage:"",
        description:"",

    })
    
    const books = useSelector((state) => state.bookReducer);

    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setBook({
            ...book,
            [e.target.name]:e.target.value,

        })
        
        
    }
    
    
    const handleSubmit= (e) =>{
        e.preventDefault()

        const existingBook = books.find((b) => b.id === book.id);
        if (existingBook) {
          alert('This ID is already used. Please use a different ID.');
          return; // Stop form submission
        }

        if(book.id && book.title && book.author){
            dispatch(addBook(book))        
            console.log('Book added:', book);

            setBook({
            id: '',
            title: '',
            author: '',
            genre: '',
            coverImage: '',
            description: '',
             })
        
        }
        else{
            alert("Please Fill the required feilds")
        }
        


    }




  return (
    <>
      <div className="container p-3 d-flex flex-column align-items-center justify-content-center " style={{marginTop:"13rem"}}>
        <Form className='text-primary d-flex flex-column w-50 '>
            <input type="text" name="id"
            value={book.id} placeholder='ID' className='p-3 m-1 rounded' onChange={handleChange} required />
            <input type="text" name="title"
          value={book.title} placeholder='Name of the Book' className='p-3 m-1 rounded'  onChange={handleChange} required/>
            <input type="text" name="author"
          value={book.author} placeholder='Name of the Author' className='p-3 m-1 rounded' onChange={handleChange} required/>
            <input type="text" name="genre"
          value={book.genre} placeholder='Genre' className='p-3 m-1 rounded' onChange={handleChange} required/>
            <input type="text" name="coverImage"
          value={book.coverImage} placeholder='Book Cover Image Link' className='p-3 m-1 rounded' onChange={handleChange} required/>
            <textarea name="description"
          value={book.description} placeholder='Description' className='p-3 m-1 rounded' onChange={handleChange} required></textarea>

            <Button className='btn btn-danger mt-2' onClick={handleSubmit}>Add</Button>
        </Form>
      </div>
    </>
  )
}

export default Add
