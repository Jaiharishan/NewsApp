import React from 'react'

const News = ({news}) => {
    return (
        <div className='my-2'>
            {news && <img src = {news.image} width='150px' alt='img'/>}
            {news.title}
        </div>
    )
}

export default News
