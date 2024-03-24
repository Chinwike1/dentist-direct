'use client'

import { Button } from '../ui/button'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import GoogleColoredIcon from '../icons/google'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { authSchema } from './login-form'

// schema for signup form
export default function RegisterForm() {
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
                  <Input placeholder="me@email.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Register with Email <EnvelopeClosedIcon className="ml-3 size-5" />
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
        className="w-full border-slate-300"
        variant="outline"
        onClick={() =>
          signIn('google', {
            callbackUrl: '/dashboard',
          })
        }
      >
        Google <GoogleColoredIcon className="ml-3 size-5" />
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
