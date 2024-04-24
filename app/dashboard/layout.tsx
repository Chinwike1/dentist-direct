import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/dashboard/sidebar'
import DashboardContent from '@/components/dashboard/dashboard-content'
import Header from '@/components/dashboard/header'

export default async function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  // TODO: add functionality for redirecting the user based of 'action' urlParam e.g "/dashboard?action=book"

  return (
    <div className="relative bg-[#EFFEFF]">
      <Sidebar />
      <Header />
      <DashboardContent>{children}</DashboardContent>
    </div>
  )
}
