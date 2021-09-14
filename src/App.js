import React from 'react';
import NewsList from './components/NewsList';
import Api from './components/Api';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ScrollBox from './components/ScrollBox';



function App() {

  const [recentNews, setRecentNews] = useState('');
  const [businessnews, setBusinessNews] = useState('');
  const [sportsnews, setSportsNews] = useState('');
  const [technews, setTechNews] = useState('');
  const [entertainmentnews, setEntertainmentNews] = useState('');
  const [healthnews, setHealthNews] = useState('');

  // results got from searching
  const [searchNews, setSearchNews] = useState('');


  
  const loadNews = (url, func) => {
    axios.get(url).then(res => {
      func(res.data.articles);
    })
  };


  useEffect(() => {
    if (!searchNews) {
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${Api.key}`, setRecentNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${Api.key}`, setBusinessNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${Api.key}`, setSportsNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${Api.key}`, setTechNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${Api.key}`, setEntertainmentNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${Api.key}`, setHealthNews);
    }
  }, [searchNews])




  const topics = {
    'Recent': '/',
    'Business': '/Business',
    'Technology': '/Tech',
    'Entertainment': '/Entertainment',
    'Sports': '/Sports',
    'Health': '/health'
  }

  const searchUrl = (q) => {return `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&apiKey=${Api.key}`}


  const onSearch = (e, query) => {
    e.preventDefault();
    axios.get(searchUrl(query)).then(res => {
        console.log(res.data.articles);
        setSearchNews(res.data.articles);
        console.log(searchNews);
    })

}


  return (
    <div>

      <Navbar topics={topics} onSearch = {onSearch} />

      

      <div className="mt-4 w-100 text-light">.</div>
      {searchNews && <NewsList  header={'SearchResults'} news={searchNews} color = {'red'} />}

      <Router>

        <Switch>
        
          <Route path='/'> {recentNews &&<NewsList header={'Recent'} news={recentNews} color = {'red'} />} </Route>
          <Route path='/Business'><NewsList header={'Business'} news={businessnews} /></Route>
          <Route path='/Sports'><NewsList header={'Sports'} news={sportsnews} /></Route>
          <Route path='/Tech'><NewsList header={'Tech'} news={technews} /></Route>
          <Route path='/Entertainment'><NewsList header={'Entertainment'} news={entertainmentnews} /></Route>
          <Route path='/Health'><NewsList header={'Health'} news={healthnews} /></Route>

        </Switch>

      </Router>

      {businessnews && <NewsList header={'Business'} news={businessnews} color= {'blue'}/>}
      {sportsnews && <NewsList header={'Sports'} news={sportsnews} color = {'green'}/>}
      {technews && <NewsList header={'Tech'} news={technews} color = {'darkblue'} />}
      {entertainmentnews && <NewsList header={'Entertainment'} news={entertainmentnews} color = {'orange'} />}
      {healthnews && <NewsList header={'Health'} news={healthnews} color = {'tomato'}/>}



    </div>
  )
}

export default App;
