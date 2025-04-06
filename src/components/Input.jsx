import { forwardRef } from "react"


const Input = forwardRef (function Input({label, className, ...props},ref)  {
  return (
          <input
            ref={ref}
            {...props}
            className={`px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${className}`}
      />
  )
})

export default Input
