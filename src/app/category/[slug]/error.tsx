'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error])
 
  return (
    <div className='min-h-[500px] flex justify-center items-center'>
      <div className="w-3/4 p-10 bg-white rounded-sm shadow-md text-center">
         <FiAlertTriangle className="w-24 h-24 text-primary mx-auto"/>
        <h2 className='text-lg mb-2 text-primary'>Something went wrong!</h2>
        <p className='text-sm mb-2'>{error.message}</p>
        <button
          className='text-white rounded-lg font-semibold py-2 px-4 bg-primary'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  )
}