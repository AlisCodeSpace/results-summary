import Button from './UI/Button'
import data from '../data/data'
import SummaryContent from './SummaryContent'

const Summary = () => {
  const summaryContent = data.map((item, index) => (
    <SummaryContent key={index} icon={item.icon} category={item.category} score={item.score} index={index}/>
  ))
  return (
    <div className='flex flex-col p-8 gap-5 w-1/2 max-sm:w-full'>
      <h1 className='dark-gray-blue font-extrabold text-xl'>Summary</h1>
      <ul className='flex flex-col gap-4 mt-2'>
        {summaryContent}
      </ul>
      <Button />
    </div>
  )
}

export default Summary
