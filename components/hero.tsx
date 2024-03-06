import Link from 'next/link'
import ToothIcon from './icons/tooth'
import { ArrowRightIcon } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <span className="mx-auto flex w-fit items-center justify-center rounded-full border-2 border-blue-200 bg-blue-100 px-2 py-1 text-sm font-semibold">
        <ToothIcon className="h-6 w-6 text-slate-100" />
        Award-Winning Dentist
      </span>
      <div className="mx-auto mt-6 w-fit text-center lg:w-4/5">
        <h1 className="text-balance text-4xl font-extrabold lg:text-6xl">
          Experience gentle and comprehensive dentistry
        </h1>
        <p className="mx-auto my-6 text-balance xl:w-4/5">
          Our experienced team of dentists and friendly staff work together to
          create a comfortable and welcoming environment for anyone who walks
          through our doors.
        </p>
        <div className="mx-auto w-fit">
          <Link
            href="/dashboard?action=new_appointment"
            className="bg-brand hover:bg-brand-600 group relative flex h-12 items-center justify-center overflow-hidden rounded-md px-6 text-neutral-50 transition"
          >
            <span className="relative font-bold">Book An Appointment</span>{' '}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
            <div className="animate-shine-infinite absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full justify-center blur-[12px]">
              <div className="relative h-full w-8 bg-white/30"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
