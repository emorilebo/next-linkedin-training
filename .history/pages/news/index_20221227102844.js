import React from 'react'

export default function News() {
  return (
    <div>Top Stories</div>
  )
}


const API_KEY = "XqCjeBovgaAskcg8E2nTjxcxN325yZxk"
export async function getStaticProps() {
    const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    const res = await fetch(URL)
    const data = aw
    return {
        
        props:{}
    }
}