import Link from 'next/link'
import ToothIcon from '../icons/tooth'
import { ArrowRightIcon } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <span className="mx-auto flex w-fit items-center justify-center rounded-full border-2 border-blue-200 bg-blue-100 px-2 py-1 text-sm">
        <ToothIcon className="h-6 w-6 text-slate-100" />
        Award-Winning Dentists
      </span>
      <div className="mx-auto mt-6 w-fit text-center md:w-[77%] lg:w-4/5">
        <h1 className="text-balance font-sans text-3xl font-extrabold lg:text-6xl">
          Schedule your next dentistry appointment <br className="sm:hidden" />
          <span className="text-aqua underline">on time</span>
        </h1>
        <p className="mx-auto mb-8 mt-6 text-balance sm:w-[77%]">
          Get connected with top dentists in your area from a vetted pool of
          dental professionals.
        </p>
        <Link
          href="/dashboard/book?action=new_appointment"
          className="group relative mx-auto flex h-14 w-fit items-center justify-center overflow-hidden rounded-md bg-aqua px-6 text-aqua-100 transition ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-aqua-100"
        >
          <span className="relative font-semibold">Book An Appointment</span>
          <ArrowRightIcon className="ml-2 h-5 w-5" />
          <div className="absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full animate-shine-infinite justify-center blur-[12px] delay-200">
            <div className="relative h-full w-8 bg-white/30"></div>
          </div>
        </Link>
      </div>
    </>
  )
}
