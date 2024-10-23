const Result = () => {
  return (
    <div className="background flex flex-col items-center p-8 gap-8 w-1/2 sm:rounded-2xl max-sm:rounded-b-2xl max-sm:w-full">
      <h3 className="text-gray-300 text-xl">Your Result</h3>
      <div className="circle rounded-full p-8 w-[180px] h-[180px] flex flex-col items-center justify-center">
        <h1 className="text-center text-white text-5xl font-extrabold">76</h1>
        <p className="text-slate-400 text-center">of 100</p>
      </div>
      <div className="">
        <h2 className="text-center text-white text-3xl font-bold mb-2">Great</h2>
        <p className="text-center text-gray-300 px-10">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  )
}

export default Result
