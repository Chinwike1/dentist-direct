import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend'

interface SendVerificationRequestParams {
  identifier: string
  url: string
  expires: Date
  token: string
  // provider: EmailConfig
  // theme: Theme
}
// Initialize MailerSend
const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
})

export default async function sendVerificationRequest({
  identifier,
  url,
}: SendVerificationRequestParams) {
  const templateId = '3yxj6ljd920ldo2r'
  const sentFrom = new Sender(process.env.FROM_EMAIL, 'Dentist Direct')

  const recipients = [new Recipient(identifier, identifier)]

  // data needed for the MailerLite template
  const personalization = [
    {
      email: identifier,
      data: {
        magic_link: url,
      },
    },
  ]

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject('Sign in to Dentist Direct')
    .setPersonalization(personalization)
    .setTemplateId(templateId)

  try {
    await mailerSend.email.send(emailParams)
    console.log('Email delivered!')
  } catch (error: any) {
    console.error(error)
    throw new Error('Failed to send verification email')
  }
}
