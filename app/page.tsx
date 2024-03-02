import { StethoscopeIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="min-h-screen p-24 text-center">
      <h2 className="mx-auto flex w-fit items-center gap-3 font-mono text-5xl font-bold">
        Dentist Direct <StethoscopeIcon size={24} />
      </h2>
      <div className="text-lg">
        <p className="my-4 font-bold">
          Experience gentle and comprehensive dentistry
        </p>
        <p className="mx-auto font-sans lg:w-3/5">
          Our experienced team of dentists and friendly staff work together to
          create a comfortable and welcoming environment for anyone who walks
          through our doors.
        </p>
        <div className="mx-auto mt-5 flex w-fit gap-6">
          <Link className="underline hover:font-bold" href="/auth">
            Authenticate
          </Link>
          <Link
            className="underline hover:font-bold"
            href="/dashboard?action=new_appointment"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  )
}
