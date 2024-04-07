import LoginForm from '@/components/layout/login-form'
import Navbar from '@/components/layout/navbar'

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <section className="mt-5 flex min-h-screen items-center justify-center text-center">
        <LoginForm />
      </section>
    </>
  )
}
