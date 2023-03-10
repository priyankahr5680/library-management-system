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
                         
            <h1>{books.title}</h1>
            
            <p><b className="short"> ShortDescription : </b> {books.shortDescription}</p>  
                 
            <p><b className="long"> LongDescription </b> : {books.longDescription}</p> 
                  
        </div>
     );
}
 
export default ReadBook;