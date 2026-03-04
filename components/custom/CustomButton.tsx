import Link from 'next/link'

const CustomButton = ({title, href}:{title:string, href:string}) => {
  return (
    <Link
              href={href}
              className="bg-secondary px-9 py-4 rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200 "
            >
              {title}
            </Link>
  )
}

export default CustomButton