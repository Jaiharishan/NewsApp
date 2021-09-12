import { Button } from 'react-bootstrap';
import NewsList from './components/NewsList';
import Api from './components/Api';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar'


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

<<<<<<< HEAD

    loadNews();
  }, [])


  return (
    <div>
      <Navbar />
      <Button>News Application</Button>

      <NewsList news={news} />

    </div>
  )
=======
    loadNews(`https://gnews.io/api/v4/top-headlines?lang=en&topic=technology&token=${Api.key}`, setTechNews);

    loadNews(`https://gnews.io/api/v4/top-headlines?lang=en&topic=entertainment&token=${Api.key}`, setEntertainmentNews);
  }, [])


    return (
        <div>

            <NewsList header = {'Recent'} news = {recentNews} />
            <NewsList header = {'Business'} news = {businessnews} />
            <NewsList header = {'Sports'} news = {sportsnews} />
            <NewsList header = {'Tech'} news = {technews} />
            <NewsList header = {'Entertainment'} news = {entertainmentnews} />

        </div>
      )
>>>>>>> 84fcdae629bb2d1a8d4ee14336b2dd9ab301071f
}

export default App;
