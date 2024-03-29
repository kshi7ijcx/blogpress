const Button = (props) => {
  return (
    <button className="bg-[#7E6363] hover:bg-[#A87C7C] px-3 py-1 rounded-full shadow-2xl hover:-translate-y-0.5 tracking-wide font-medium max-w-fit">{props.value}</button>
  )
}
export default Button