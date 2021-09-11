import React from 'react'
import News from './News';

const NewsList = ({news}) => {
    console.log(news);
    return (
        <div>
            {
                news && news.map((n, index) => (
                    <News key = {index} news = {n} />
                ))
            }
            
        </div>
    )
}

export default NewsList
