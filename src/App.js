import NewsList from './components/NewsList';
import Api from './components/Api';
import { useEffect, useState } from 'react';
import axios from 'axios';

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



    return (
        <div>
            <NewsList header = {'Recent'} news = {recentNews} color= {'blue'} />
            <NewsList header = {'Business'} news = {businessnews}  color = {'orange'}/>
            <NewsList header = {'Sports'} news = {sportsnews} color = {'steelblue'} />
            <NewsList header = {'Tech'} news = {technews} color = {'tomato'}/>
            <NewsList header = {'Entertainment'} news = {entertainmentnews} color={'darkblue'} />
            <NewsList header = {'Health'} news = {healthnews} color = {'red'}/>
        </div>
      )
}

export default App;
