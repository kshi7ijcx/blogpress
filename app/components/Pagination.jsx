const Pagination = ({length}) => {
  return (
    <div className="flex justify-between px-8">
        <button className="text-xl font-bold btn">&lt;</button>
        {}
        <button className="text-xl font-bold btn">&gt;</button>
    </div>
  )
}
export default Pagination