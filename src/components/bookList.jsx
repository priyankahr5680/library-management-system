import { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../styles/bookList.css'


const BookList = () => {
    let navigate=useNavigate()
    //use to fetch route value
    let location=useLocation()
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
        if(location.pathname=='/admin/book-list'){
        navigate(`/admin/book-list/${id}`)
        }
        else{
            navigate(`/user/book-list/${id}`)
        }
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
                        <button id="button1" onClick={()=>read(data.id)}>Read more</button>
                        {location.pathname=='/admin/book-list' && <button  onClick={()=>handleDelete(data.id,data.title)}>Remove</button>}
                       
                    </div>
                 </div>
            ))}
            </div>
        </div>
     );
            }
 
export default BookList;