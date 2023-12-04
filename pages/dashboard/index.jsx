import { useRouter } from 'next/router'
import { UserAuth } from '@/context/AuthContext'
import TransitionEffect from '@/components/TransitionEffect'
const Dashboard = () => {
  const { user } = UserAuth()
  const router = useRouter()
  return (
    <div className='w-full min-h-screen p-5'>
      <TransitionEffect />
      {!user ? (<h3 className='flex items-center justify-center w-full h-full'>You have to login before using this page</h3>) : (<div className='container mx-auto'>
        <div className='flex items-center'>
          <h3>Welcome, {user.displayName}</h3>
        </div>
      </div>)}
    </div>
  )
}

export default Dashboard