import React from 'react'

interface BlogInfo {
    id: number;
    title: string;
    imgRef: string;
    category: string;
    description: string;
    createdAt: string;
    content: string;
}


const SingleBlog = () => {
    
    const testData: BlogInfo = {
        id: 1,
        title: "Some crazy new title that everyone will want to read and click all over it",
        imgRef: "https://www.bkacontent.com/wp-content/uploads/2015/12/Photography.jpg",
        category: "music",
        description: "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato.",
        createdAt: "03 April 2023",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac. Gravida rutrum quisque non tellus orci ac auctor. Vel elit scelerisque mauris pellentesque pulvinar. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. \n Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Fusce ut placerat orci nulla. Dolor sit amet consectetur adipiscing elit. Ut ornare lectus sit amet est. Malesuada fames ac turpis egestas sed tempus urna. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Donec ultrices tincidunt arcu non sodales neque. Iaculis eu non diam phasellus vestibulum lorem sed risus. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum.`
    }

    return (
    <article className='single-blog'>
        <div className='img-holder'>
            <img className='single-header-img' src={testData.imgRef} />
        </div>
        <div className='single-article'>
            <h1>{testData.title}</h1>
            <div className='date-name'>
                <p>{testData.createdAt}</p>
                <p>Author: David Penderson</p>
            </div>
            <p>{testData.content}</p>
            <p>
            <img src='https://images.news18.com/ibnlive/uploads/2021/06/1622715559_disha.jpg?impolicy=website&width=510&height=356' />
                {testData.content}
            </p>
            <p>{testData.content}</p>
        </div>
    </article>
  )
}

export default SingleBlog
