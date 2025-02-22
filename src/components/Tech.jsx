import python from '../assets/Python.png'
import java from '../assets/Java.png'
import javascript from '../assets/JavaScript.png'
import c from '../assets/C.png'
import cplus from '../assets/Cplus.png'
import csharp from '../assets/Csharp.png'

const Tech = () => {
  return (
    <div className='mt-150 pb-100' >
      <h2 className='my-10 text-center text-4xl'>My Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        <div className='rounded-2xl border-4 border-neutra-800 p-5 flex flex-col items-center'>
          <div className="w-20 h-20 flex items-center justify-center">
            <img src={python} alt='python' className="w-[80px] h-[80px] object-contain" />
          </div>
          <h1 className="mt-2 text-center">Python</h1>
        </div>
        <div className='rounded-2xl border-4 border-neutra-800 p-5 flex flex-col items-center'>
          <div className="w-20 h-20 flex items-center justify-center">
            <img src={java} alt='java' className="w-[80px] h-[80px] object-contain" />
          </div>
          <h1 className="mt-2 text-center">Java</h1>
        </div>
        <div className='rounded-2xl border-4 border-neutra-800 p-5 flex flex-col items-center'>
          <div className="w-20 h-20 flex items-center justify-center">
            <img src={javascript} alt='javascript' className="w-[80px] h-[80px] object-contain" />
          </div>
          <h1 className="mt-2 text-center">JavaScript</h1>
        </div>
        {/* Repeat for other items, with same image size */}
        <div className='rounded-2xl border-4 border-neutra-800 p-5 flex flex-col items-center'>
          <div className="w-20 h-20 flex items-center justify-center">
            <img src={c} alt='c' className="w-[80px] h-[80px] object-contain" />
          </div>
          <h1 className="mt-2 text-center">C</h1>
        </div>
        <div className='rounded-2xl border-4 border-neutra-800 p-5 flex flex-col items-center'>
          <div className="w-20 h-20 flex items-center justify-center">
            <img src={cplus} alt='cplus' className="w-[80px] h-[80px] object-contain" />
          </div>
          <h1 className="mt-2 text-center">C++</h1>
        </div>
		<div className='rounded-2xl border-4 border-neutra-800 p-5 flex flex-col items-center'>
          <div className="w-20 h-20 flex items-center justify-center">
            <img src={csharp} alt='csharp' className="w-[80px] h-[80px] object-contain" />
          </div>
          <h1 className="mt-2 text-center">C#</h1>
        </div>
      </div>
    </div>
  )
}

export default Tech
