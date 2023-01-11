import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import '../styles/readBook.css'
const ReadBook = () => {
 let params=useParams()
     let[books,setBook]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let reponce=await fetch(`http://localhost:2006/books/${params.id}`)
            let data=await reponce.json()
            setBook(data)
        }
        fetchData()
},[])
    return ( 
        <div className="readBook">
           <div className="heading1">
            <h1>{books.title}</h1>
            </div>
            <div className="short1" >
            <p> <b> ShortDescription</b> : {books.shortDescription}</p>
            </div>
            <div className="long1">
            <p><b>LongDescription</b>  : {books.longDescription}</p>
            </div>
          
        </div>
     );
}
 
export default ReadBook;