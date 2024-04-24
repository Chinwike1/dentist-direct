'use client'

import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import GoogleColoredIcon from '../icons/google'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'
import Spinner from '../ui/spinner'
import { MailPlusIcon } from 'lucide-react'

// schema for auth flow
export const authSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

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
                  <Input
                    type="email"
                    inputMode="email"
                    placeholder="you@email.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Spinner textLeft="Sending magic link" size="5" />
            ) : (
              <>
                Continue with Email <MailPlusIcon className="ml-3 size-5" />
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
        className={`w-full border-slate-300 ${loading && 'opacity-50'}`}
        variant="outline"
        onClick={() => {
          signIn('google', {
            callbackUrl: '/dashboard',
          })
          setLoading(true)
        }}
        disabled={loading}
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
