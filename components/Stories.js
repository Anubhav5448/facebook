import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        name:"Ayush Kaushik",
        src:"/Ayush.jpg",
        profile:"/Ayush_profile.jpg",

    },
    {
        name :"Shobhit Negi",
        src: "/Shobhit.jpg",
        profile: "/Shobhit_profile.jpg"
    }
]


function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto' >
        {stories.map((story) => (
            <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
        ))}

    </div>
  )
}

export default Stories