import React from 'react'

export default function News() {
  return (
    <div>News</div>
  )
}

const API_KEY = "XqCjeBovgaAskcg8E2nTjxcxN325yZxk";
export async function getServerSideProps({params}) {

    const results = await handler(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
    return {
        props:{}
    }
}