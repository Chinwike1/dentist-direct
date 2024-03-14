import Hero from '@/components/layout/hero'
import Navbar from '@/components/layout/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto min-h-screen pt-16">
        <Hero />
      </section>
    </>
  )
}
