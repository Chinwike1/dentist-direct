import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import LogoutButton from '@/components/ui/logout'
import { Pill } from '@mantine/core'

export default async function Dashboard() {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  return (
    <>
      {/* <Alert color="warning">Alert!</Alert> */}

      {/* <h1>Protected Page</h1>
      <Pill c="red">Working???</Pill> */}
      <pre>Welcome {JSON.stringify(session, null, 2)}!</pre>
      <LogoutButton />
    </>
  )
}
