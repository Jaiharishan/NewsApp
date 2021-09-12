import React from 'react'

const News = ({news, header}) => {

    const contentStyles = {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 4,
        overflow: 'hidden'
    }

    
    return (
        <a href={news.url} rel='noreferrer' style={{textDecoration: 'none', color: 'black'}} target='_blank' className='m-1 mx-2'>
            <div className='d-flex flex-column' style = {{width: '320px', border: '1px solid rgb(220, 220, 220)'}}>

                {news && <img src = {news.urlToImage} width='100%' height='200px' alt='img'/>}
                <div className='p-1'>
                    <div className='mt-3 h5' style = {{display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden'}}>{news.title}</div>
                    <div className='mt-1 d-flex' ><p className='fw-bold mx-1'>source</p> {news.source.name}</div>
                    <p style = {contentStyles}>{news.content}</p>
                    <div className='fw-light'>{header}</div>

                </div>
            </div>
        </a>
        
    )
}

export default News
