import { auth } from '@/auth'
import { redirect } from 'next/navigation'
export default async function Dashboard() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  return (
    <>
      <h1>Protected Page</h1>
      <pre>Welcome {JSON.stringify(session.user, null, 2)}!</pre>
    </>
  )
}
