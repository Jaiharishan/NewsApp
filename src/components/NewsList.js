import React from 'react'
import News from './News';

const NewsList = ({header, news}) => {
    console.log(news);
    return (
        <>
        <div className='h4 mx-2 mt-3'>{header}</div>
        <div className='d-flex px-2'>
            {
                news && news.map((n, index) => (
                    <News key = {index} news = {n} header = {header} />
                ))
            }
            
        </div>
        </>
    )
}

export default NewsList
