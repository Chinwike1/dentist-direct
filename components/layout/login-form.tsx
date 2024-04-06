'use client'

import { Button } from '../ui/button'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import GoogleColoredIcon from '../icons/google'
import Link from 'next/link'
<<<<<<< HEAD
import { useState } from 'react'
import { RotateCw } from 'lucide-react'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'
=======
import { Spinner } from '@radix-ui/themes'
import { useState } from 'react'
>>>>>>> 72d843a8474eb70098cb1e68e172222cba937904

// schema for auth flow
export const authSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

export default function LoginForm() {
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

=======
  const [loading, setLoading] = useState(false)
>>>>>>> 72d843a8474eb70098cb1e68e172222cba937904
  // RHF instance
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
    },
  })

  async function sendMagicLink(data: z.infer<typeof authSchema>) {
    setIsLoading(true)
    try {
      const res = await fetch(`${window.location.origin}/api/get-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
        }),
      })
      const response = await res.json()

      // only send magic link if email exists in DB
      if (response.userExists) {
        const signInResult = await signIn('email', {
          email: data.email.toLowerCase(),
          redirect: false,
          callbackUrl: '/dashboard',
        })

        if (signInResult?.ok && signInResult.error === null) {
          setIsLoading(false)
          toast({
            title: 'Email Delivered!',
            description: 'Check your inbox or spam folder for your login link.',
          })
          return
        }
      } else {
        router.push(`/register?newUser=true?&email=${data.email}`)
      }
    } catch (error: any) {
      setIsLoading(false)
      toast({
        title: 'Sorry, we encountered a problem sending the email',
        description: 'Please try again.',
      })
    }
  }

  return (
    <div className="w-4/5 sm:w-3/5 xl:w-[35%]">
      <h1 className="text-3xl font-bold lg:text-4xl">Welcome Back</h1>
      <p className="mb-6 mt-3">Your dental health journey awaits you.</p>

      {/* login with email */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(sendMagicLink)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="me@email.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                Sending email
                <RotateCw className="ml-3 size-5 animate-spin" />
              </>
            ) : (
              <>
                Continue with Email{' '}
                <EnvelopeClosedIcon className="ml-3 size-5" />
              </>
            )}
          </Button>
        </form>
      </Form>

      {/* divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t-2" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>

      {/* login with oauth */}
      <Button
        className="w-full border-slate-400"
        variant="outline"
        onClick={() => {
          signIn('google', {
            callbackUrl: '/dashboard',
          })
          setLoading(true)
        }}
      >
        Continue with Google <GoogleColoredIcon className="ml-3 size-5" />
        {loading ? <Spinner className="ml-3" size="3" /> : null}
      </Button>

      <div className="mt-6">
        Don't have an account?{' '}
        <Link className="capitalize underline" href="/register">
          Register here.
        </Link>
      </div>
    </div>
  )
}
