'use client'
import { useRouter } from 'next/navigation'

function Result() {
  const router = useRouter()
  const { name, age } = router.query

  return (
    <div>
      <h1>Result Page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Result