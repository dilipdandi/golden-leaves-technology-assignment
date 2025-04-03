

const Input = ({label, className, ...props}) => {
  return (
          <input
            {...props}
            className={`px-4 py-4 mx-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${className}`}
      />
  )
}

export default Input
