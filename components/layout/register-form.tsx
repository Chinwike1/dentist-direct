'use client'

import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import GoogleColoredIcon from '../icons/google'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { authSchema } from './login-form'
import { useEffect, useState } from 'react'
import { toast } from '../ui/use-toast'
import { useSearchParams } from 'next/navigation'
import Spinner from '../ui/spinner'
import { MailPlusIcon } from 'lucide-react'

// schema for signup form
export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()

  // show toast for new users
  useEffect(() => {
    const newUser = searchParams.get('newUser')
    if (newUser) {
      toast({
        title: "Looks like you're new around here",
        description: 'Create your account now',
      })
    }
  }, [])

  // RHF instance
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: searchParams.get('email') || '',
    },
  })

  async function sendMagicLink(data: z.infer<typeof authSchema>) {
    setIsLoading(true)
    try {
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
    } catch (error: any) {
      setIsLoading(false)
      toast({
        title: 'Sorry, we encountered a problem sending the email',
        description: 'Please try again.',
      })
    }
  }

  return (
    <div className="w-4/5 lg:w-3/5">
      <h1 className="text-3xl font-bold lg:text-4xl">Get started with us</h1>
      <p className="mb-6 mt-3">Let's help put a smile on your face today!</p>

      {/* register with email */}
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
              <>
                <Spinner textLeft="Sending magic link" />
              </>
            ) : (
              <>
                Register with Email <MailPlusIcon className="ml-3 size-5" />
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

      {/* register with oauth */}
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
        Google <GoogleColoredIcon className="ml-3 size-5" />
        {loading ? <Spinner size="5" /> : null}
      </Button>

      <div className="mt-6">
        By clicking continue, you agree to our{' '}
        <Link className="capitalize underline" href="#">
          terms of service
        </Link>{' '}
        and{' '}
        <Link className="capitalize underline" href="#">
          privacy policy
        </Link>{' '}
      </div>
    </div>
  )
}
