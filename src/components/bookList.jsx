import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import '../styles/bookList.css'
import ReadBook from "./readBook";
const BookList = () => {
    let navigate=useNavigate()
    let[books,setBook]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let reponce=await fetch("http://localhost:2006/books")
            let data=await reponce.json()
            setBook(data)
        }
        fetchData()
    },[books])
    //delete a book from server
    let handleDelete=(id,title)=>{
       fetch(`http://localhost:2006/books/${id}`,{
        method:'DELETE'
       })
       alert(`${title} will be deleted permanently`)
    }
    let read=(id)=>{
        navigate(`/admin/book-list/${id}`)
    }
    
    return ( 
        <div className="booklist">
            <h1>Book List:{books.length}</h1>
            <div className="books_section">
            {books.map(data=>(
                <div className="book_details">
                    
                <div className="images">
                    <a href={data.thumbnailUrl} > <img  width="150" height="220" src={data.thumbnailUrl} alt="" /></a>                      
                     </div>
                    <div className="book_card">
                        <h4>Title : {data.title}</h4>
                        <h5>Author : {data.authors.toString()}</h5> 
                        <h6>PageCount : {data.pageCount}</h6>
                        <h6>Category : {data.categories.toString()}</h6>
                        <button onClick={()=>read(data.id)}>Read more</button>
                        <button onClick={()=>handleDelete(data.id,data.title)}>Remove</button>
                       
                    </div>
                    <ReadBook data={read}/>
                 </div>
            ))}
            </div>
        </div>
     );
            }
 
export default BookList;