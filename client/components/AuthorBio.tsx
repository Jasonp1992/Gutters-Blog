import React from 'react'

const AuthorBio = () => {
  return (
    <div className='author-bio-container'>
        <div className='profile-picture'>
            <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="profile picture" />
        </div>
        <article className='author-bio-text'>
            <p className='author-name'>David Paterson</p>
            <p className='author-company'>Pixie Flix Photography</p>
            <p className='author-title'>AUTHOR</p>
            <p className='author-bio'>David is an accomplished writer with a passion for storytelling. With a degree in English, he has honed his craft through years of writing experience, producing worlds what range form author.</p>
        </article>
    </div>
  )
}

export default AuthorBio
