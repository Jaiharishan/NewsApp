import {Button} from 'react-bootstrap';
import NewsList from './components/NewsList';
import Api from './components/Api';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [news, setNews] = useState('');

  useEffect(() => {
    const loadNews = () => {
      axios.get(`https://gnews.io/api/v4/top-headlines?lang=en&topic=business&token=${Api.key}`).then(res => {
        setNews(res.data.articles);
      })
    };

    
    loadNews();
  }, [])


    return (
        <div>
            <Button>News Application</Button>

            <NewsList news = {news} />
            
        </div>
      )
}

export default App;
