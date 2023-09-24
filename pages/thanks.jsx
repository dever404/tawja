import Link from 'next/link'
export default function thanks() {
  return (
    <div className="py-40 flex flex-col justify-center items-center">
      <h1 className="text-[40px] mb-10">  Your order has been received </h1>
      <Link href="/">
        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0">
        Back to the home page
        </a>
      </Link>
    </div>
  )
}