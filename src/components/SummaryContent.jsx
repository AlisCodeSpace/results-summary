const SummaryContent = (props) => {
  const backgroundColor = [
    "hsla(0, 100%, 67%, 0.1)",   // lightRed
    "hsla(39, 100%, 56%, 0.1)",  // orangeYellow
    "hsla(166, 100%, 37%, 0.1)", // greenTeal
    "hsla(234, 85%, 45%, 0.1)"   // cobaltBlue
  ];

  const color = [
    "hsl(0, 100%, 67%)",   // lightRed
    "hsl(39, 100%, 56%)",  // orangeYellow
    "hsl(166, 100%, 37%)", // greenTeal
    "hsl(234, 85%, 45%)"   // cobaltBlue
  ];

  return (
    <li>
      <div style={{backgroundColor: `${backgroundColor[props.index]}`}} className="flex justify-between p-3 rounded-md">
        <div className="flex gap-2">
          <img src={props.icon} alt="Icon" />
          <span style={{color: color[props.index]}} className="font-semibold">{props.category}</span>
        </div>
        <div>
          <p className="font-bold text-gray-500"><span className="dark-gray-blue">{props.score}</span> / 100</p>
        </div>
      </div>
    </li>
  )
}

export default SummaryContent
