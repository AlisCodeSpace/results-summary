const Button = ({ className }) => {
  const classes = `${className || ''} dark-gray-blue-bg rounded-full w-full text-white py-2 mt-4`
  return <button className={classes}>Continue</button>
}

export default Button
