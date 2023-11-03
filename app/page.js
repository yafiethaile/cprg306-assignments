import StudentInfo from './studentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CPRG 306 Web Development 2 Assignments</h1>

      <StudentInfo/>
      <p>
      <Link href="/week2" className= "block mb-2">Week 2</Link> 
      <Link href="/week3" className= "block mb-2">Week 3</Link>
      <Link href="/week4" className= "block mb-2">Week 4</Link>
      <Link href="/week5" className= "block mb-2">Week 5</Link>
      <Link href="/week6" className= "block mb-2">Week 6</Link>
      <Link href="/week7" className= "block mb-2">Week 7</Link>
      <Link href="/week8" className= "block mb-2">Week 8</Link>
      </p>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >  
          </a>
        </div>
      </div>
    </main>
  )
}
