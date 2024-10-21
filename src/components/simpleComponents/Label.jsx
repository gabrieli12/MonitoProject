
function Label({value, For}) {
  return (
    <label className="font-inter font-medium text-sm text-darkBlue" htmlFor={For}>{value}</label>
  )
}

export default Label