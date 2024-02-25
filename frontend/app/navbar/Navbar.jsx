import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='MarketMate'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>MarketMate</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}

