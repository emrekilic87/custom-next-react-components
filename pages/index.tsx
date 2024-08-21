import { Inter } from "next/font/google";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center space-y-4">
      <Link href="/buttons">Buttons</Link>
    </main>
  );
}
