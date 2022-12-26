import { useRouter } from 'next/router'
import React from 'react'
import topics from './topics'

export default function Learn() {
    const router = useRouter()
    const {} = router.query
    const topic = topics.find(topic)
  return (
    <div>Learn </div>
  )
}
