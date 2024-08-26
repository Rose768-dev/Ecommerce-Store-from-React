import './Icon.css'
import { Link } from 'react-router-dom'
const Icon = () => {
  return (
    /**
 * v0 by Vercel.

 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

    <footer className="w-full py-6 md:py-12">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
        <div className="flex items-center gap-4 text-sm">
          <Link className="hover:text-gray-900 dark:hover:text-gray-50" href="#">
            <span className="sr-only"></span>
            <FacebookIcon className="w-4 h-4" />
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50" href="#">
            <span className="sr-only"></span>
            <TwitterIcon className="w-4 h-4" />
          </Link>
          <Link className="hover:text-gray-900 dark:hover:text-gray-50" href="#">
            <span className="sr-only"></span>
            <InstagramIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>

  )
}

export default Icon
