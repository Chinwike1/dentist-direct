import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
export default function LogoutButton() {
  return (
    <>
      <button
        onClick={() => {
          signOut({ callbackUrl: '/' })
        }}
      >
        Logout
      </button>
    </>
  )
}
