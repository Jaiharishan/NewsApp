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

  useEffect(() => {
    const loadNews = (url, func) => {
      axios.get(url).then(res => {
        func(res.data.articles);
      })
    };
    loadNews(`https://gnews.io/api/v4/top-headlines?lang=en&token=${Api.key}`, setRecentNews);

    loadNews(`https://gnews.io/api/v4/top-headlines?lang=en&topic=business&token=${Api.key}`, setBusinessNews);

    loadNews(`https://gnews.io/api/v4/top-headlines?lang=en&topic=sports&token=${Api.key}`, setSportsNews);

    loadNews(`https://gnews.io/api/v4/top-headlines?lang=en&topic=technology&token=${Api.key}`, setTechNews);

    loadNews(`https://gnews.io/api/v4/top-headlines?lang=en&topic=entertainment&token=${Api.key}`, setEntertainmentNews);
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
