import Link from 'next/link'
import ToothIcon from '../icons/tooth'
import { ArrowRightIcon } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <span className="mx-auto flex w-fit items-center justify-center rounded-full border-2 border-blue-200 bg-blue-100 px-2 py-1 text-sm">
        <ToothIcon className="h-6 w-6 text-slate-100" />
        Award-Winning Dentist
      </span>
      <div className="mx-auto mt-6  w-fit text-center lg:w-4/5">
        <h1 className="text-balance font-mono text-4xl font-extrabold lg:text-6xl">
          Experience gentle and comprehensive dentistry
        </h1>
        <p className="mx-auto mb-8 mt-4 text-balance xl:w-4/5">
          Our experienced team of dentists and friendly staff work together to
          create a comfortable and welcoming environment for anyone who walks
          through our doors
        </p>
        <Link
          href="/dashboard/book?action=new_appointment"
          className="bg-aqua text-aqua-100 hover:shadow-aqua-100 group relative mx-auto flex h-14 w-fit items-center justify-center overflow-hidden rounded-md px-6 transition ease-in-out hover:scale-105 hover:shadow-lg"
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
