import DashboardLayout from '@/components/dashboard/Shell'

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  )
}
