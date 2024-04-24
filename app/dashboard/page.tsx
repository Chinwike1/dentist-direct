import { auth } from '@/auth'
import LogoutButton from '@/components/ui/logout'
import Link from 'next/link'

export default async function Dashboard() {
  const session = await auth()

  return (
    <>
      <h1 className="mb-2 font-sans text-2xl font-bold">Protected Page</h1>
      <pre>Welcome {JSON.stringify(session, null, 2)}!</pre>
      <Link href="/api/auth/signout">Logout</Link>
      {/* <LogoutButton /> */}
    </>
  )
}
