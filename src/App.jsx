import './App.css'
import Result from './components/Result'
import Summary from './components/Summary'

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-slate-100'>
      <div className='flex sm:rounded-2xl overflow-hidden w-[45rem] bg-white shadow-md h-[55vh] max-sm:h-screen max-sm:flex-col max-sm:w-full'>
        <Result />
        <Summary />
      </div>
    </div>
  )
}

export default App
