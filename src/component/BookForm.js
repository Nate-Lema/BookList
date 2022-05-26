import React,{ useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

/*const NewBookForm = () => {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handelSubmit = (e) => {
        e.preventDefault();
        addBook(title,author);
        setTitle('');
        setAuthor('');

    }
    return ( 
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="book author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add Book"/>
        </form>
     );
}
 
export default NewBookForm;*/

// working with useReducer

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title, author}});
        setTitle('');
        setAuthor(''); 
    }
    return ( 
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder="book title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="book author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add Book"/>
        </form>
     );
}
 
export default NewBookForm;
