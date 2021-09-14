import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Api from './Api';


const Search = ({onSearch}) => {
    const [query, setQuery] = useState('');
    // const [searchNews, setSearchNews] = useState('');

    // const searchUrl = (q) => {return `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&apiKey=${Api.key}`}


    // const onSearch = (e) => {
    //     e.preventDefault();
    //     axios.get(searchUrl(query)).then(res => {
    //         console.log(res.data.articles);
    //         setSearchNews(res.data.articles);
    //     })

    // }


    return (
        <form className="d-flex" onSubmit = {(e) => onSearch(e, query)} id = 'search-form' action = 'get'>
            <input value = {query} onChange = {(e) => setQuery(e.target.value)} className="form-control me-2" type="search" placeholder = 'search news' id = 'search' />
            <button  className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

export default Search
