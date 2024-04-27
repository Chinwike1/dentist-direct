import { auth } from '@/auth'
import LogoutButton from '@/components/ui/logout'
import Link from 'next/link'
import Dashcard from '@/components/dashboard/card'

export default async function Dashboard() {
  const session = await auth()

  return (
    <>
      <div className="flex w-full flex-col items-center gap-8  p-8 md:flex-row ">
        <Dashcard />
      </div>
      {session?.user?.name ? (
        <div className="flex w-full flex-col items-center gap-8 px-8 py-4 md:flex-row ">
          <h2 className="text-xl font-bold"> Hi {session?.user?.name}</h2>
        </div>
      ) : null}

      <hr />

      <pre>Welcome {JSON.stringify(session, null, 2)}!</pre>
      <Link href="/api/auth/signout">Logout</Link>
      {/* <LogoutButton /> */}
    </>
  )
}
