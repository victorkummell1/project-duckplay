import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <>
      <footer className="z-50 bg-dark-20 flex max-h-20 items-center justify-center p-8">
        <div className="z-10 max-w-9xl w-full items-center justify-between text-sm flex">
          <section className="w-full flex items-center justify-center">
            <Link href={'../../'} className="text-lg font-bold text-white">
              <Logo width="40px" height="40px" color="#FFFFFF" />
            </Link>
          </section>
        </div>
      </footer>
    </>
  )
}
