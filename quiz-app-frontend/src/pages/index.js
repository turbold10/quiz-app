import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => router.push('/login')}>Login</button>
      <button onClick={() => router.push('/signup')}>Sign up</button>
    </div>
  )
}

export default Home