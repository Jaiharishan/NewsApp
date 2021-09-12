import { Button } from 'react-bootstrap';
import NewsList from './components/NewsList';
import Api from './components/Api';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {

  const [recentNews, setRecentNews] = useState('');
  const [businessnews, setBusinessNews] = useState('');
  const [sportsnews, setSportsNews] = useState('');
  const [technews, setTechNews] = useState('');
  const [entertainmentnews, setEntertainmentNews] = useState('');
  const [healthnews, setHealthNews] = useState('');

  const loadNews = (url, func) => {
    axios.get(url).then(res => {
      func(res.data.articles);
    })
  };

  useEffect(() => {
    
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${Api.key}`, setRecentNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${Api.key}`, setBusinessNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${Api.key}`, setSportsNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${Api.key}`, setTechNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${Api.key}`, setEntertainmentNews);
    loadNews(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${Api.key}`, setHealthNews);
  }, [])
  const topics = {
    'Recent': '/',
    'Business': '/Business',
    'Technology': '/Tech',
    'Entertainment': '/Entertainment',
    'Sports': '/Sports',

  }

  return (
    <div>
      <Navbar topics={topics} />

      <Router>

        <Switch>
          <Route path='/' exact><NewsList header={'Recent'} news={recentNews} /></Route>
          <Route path='/Business'><NewsList header={'Business'} news={businessnews} /></Route>
          <Route path='/Sports'><NewsList header={'Sports'} news={sportsnews} /></Route>
          <Route path='/Tech'><NewsList header={'Tech'} news={technews} /></Route>
          <Route path='/Entertainment'><NewsList header={'Entertainment'} news={entertainmentnews} /></Route>
        </Switch>

      </Router>


    </div>
  )
}

export default App;
