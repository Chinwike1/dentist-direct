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

// schema for auth flow
export const authSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
})

export default function LoginForm() {
  // RHF instance
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
    },
  })

  async function sendMagicLink(values: z.infer<typeof authSchema>) {
    console.log(values.email)
  }

  return (
    <div className="w-4/5 lg:w-2/5">
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
          <Button type="submit" className="w-full">
            Continue with Email <EnvelopeClosedIcon className="ml-3 size-5" />
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
        onClick={() =>
          signIn('google', {
            callbackUrl: '/dashboard',
          })
        }
      >
        Continue with Google <GoogleColoredIcon className="ml-3 size-5" />
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
