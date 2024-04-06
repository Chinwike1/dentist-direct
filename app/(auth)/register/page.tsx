import Image from 'next/image'
import DentistCheckupPhoto from '@/public/images/dentist-checkup.jpg'
import Link from 'next/link'
import { MoveLeftIcon } from 'lucide-react'
import RegisterForm from '@/components/layout/register-form'
import { Suspense } from 'react'

export default function RegisterPage() {
  return (
    <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* left panel */}
      <div className="invisible hidden h-screen md:visible md:flex">
        <Image
          src={DentistCheckupPhoto}
          alt="Dentist checking up on a patient"
          className="h-full w-full object-cover object-left-top"
          placeholder="blur"
        />
      </div>

      {/* right panel */}
      <div className="relative flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 flex w-full justify-between p-8 lg:px-14">
          <Link
            className="flex items-center gap-2 hover:text-zinc-600"
            href="/"
          >
            <MoveLeftIcon className="size-5" />
            Go Home
          </Link>
          <Link className="hover:text-zinc-600" href="/login">
            Login
          </Link>
        </div>
        {/* 
           since RegisterForm uses the useSearchParams hook, it needs to be wrapped in a suspense boundary
           see — https://nextjs.org/docs/app/api-reference/functions/use-search-params#static-rendering
        */}
        <Suspense fallback={false}>
          <RegisterForm />
        </Suspense>
      </div>
    </section>
  )
}
