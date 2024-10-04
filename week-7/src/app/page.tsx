use Server
import { Server } from 'http'
import Link from './src/appetizers'
export default function Home() {
  return (
    <Link href="/dashboard">Dashboard</Link>
  )
}