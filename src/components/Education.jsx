import { EDUCATION } from "../constants";

const Education = () => {
  return (
	<div>
		<h2 className='my-20 text-center text-4xl'>Education</h2>
		<div>
			<div className='mb-8 flex flex-wrap lg:justify-center'>
				<div className='w-full lg:w-1/4'>
					<p className='mb-2 text-sm text-neutral-400'>
						{EDUCATION.year}
					</p>
				</div>
				<div className='w-full max-w-xl lg:w-3/4'>
					<h6 className='mb-2 font-semibold'>
						{EDUCATION.degree} - <span className='text-purple-200'>{EDUCATION.university}</span>
					</h6>
					<p className='mb-4 text-neutral-400'>
						{EDUCATION.description}
					</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Education