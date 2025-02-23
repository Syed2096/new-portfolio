import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
	<div className='mt-30 pb-5'>
		<motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}} className='my-10 text-center text-4xl'>
			Projects
		</motion.h2>
		<div>
			{PROJECTS.map((project, index) => (
				<motion.div 
					whileInView={{opacity: 1, x: 0}} 
					initial={{opacity: 0, x: index % 2 === 0 ? -100 : 100}} 
					transition={{duration: 1}} 
					key={index} 
					className='mb-8 flex flex-wrap lg:justify-center'
				>
					<div className='w-full max-w-xl'>
						<h6 className='mb-2 font-semibold'>{project.title}</h6>
						<p className='mb-4 text-neutral-400'>{project.description}</p>
						{project.technologies.map((tech, index) => {
							return (
								<span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500'>
								{tech}
								</span>
							);
						})}
					</div>
				</motion.div>
			))}
		</div>
	</div>
  )
}

export default Projects
