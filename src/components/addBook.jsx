import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    //title,categories,authors,longDescription,shortDescription,pageCount,thumbnailUrl
    let navigate = useNavigate()
    let [title, setTitle] = useState("")
    let [authors, setAuthors] = useState("")
    let [categories, setCategories] = useState("")
    let [longDescription, setLongDescription] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [thumbnailUrl, setThumbnailUrl] = useState("")
    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { title, authors, categories, longDescription, shortDescription, pageCount, thumbnailUrl }
        fetch("http://localhost:2006/books", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert(`book added successfully`)
        navigate('/admin/book-list')
    }
    // let reset = () => {
    //     setTitle("")
    //     setAuthors("")
    //     setCategories("")
    //     setLongDescription("")
    //     setShortDescription("")
    //     setPageCount("")
    //     setThumbnailUrl("")
    // }
    return (
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="forms">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="title" placeholder="enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="authors">
                        <input type="authors" placeholder="enter author name" value={authors} onChange={(e) => setAuthors(e.target.value)} />
                    </div>
                    <div className="categories">
                        <input type="categories" placeholder="enter categories" value={categories} onChange={(e) => setCategories(e.target.value)} />
                    </div>
                    <div className="longDescription">
                        <textarea type="text" placeholder="enter longDescription about book" value={longDescription} onChange={(e)=>setLongDescription(e.target.value)} cols="30" rows="10"></textarea>
                    </div>
                    <div className="shortDescription">
                        <textarea type="text" placeholder="enter shortDescription about book" value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} cols="30" rows="10"></textarea>
                    </div>
                    <div className="pageCount">
                        <input type="number" placeholder="enter pageCount" value={pageCount} onChange={(e) => setPageCount(e.target.value)}/>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="thumbnailUrl" placeholder="enter thumbnailUrl" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} />
                    </div>
                    <div className="addbook_butn">
                        <button>AddBook</button>
                        <button>Reset</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AddBook;