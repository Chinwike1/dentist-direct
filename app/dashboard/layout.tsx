import DashboardLayout from '@/components/dashboard/Shell'

export const metadata = {
  title: 'Dentist Direct',
  description: 'Simplified Dental Appointment Scheduling Application',
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
