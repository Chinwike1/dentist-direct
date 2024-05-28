/**
 * Use this function to initiate the Calendly OAuth flow
 */
export function initializeCalendly() {
  if (typeof window !== 'undefined') {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/calendly/oauth`
  } else {
    throw new Error('Calendly can only be initialized from a client component')
  }
}
