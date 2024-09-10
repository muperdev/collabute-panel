import Link from 'next/link'

export const OAuthLoginButton = () => {
  return <Link href="/api/users/oauth/authorize">Login with GitHub</Link>
}
