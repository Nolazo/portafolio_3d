import React from 'react'
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'
import { heroImg } from "../assets/";
import { styles } from '../styles'
import HeroBackground from './HeroBackground';

const Hero = () => {
	return (
		<>
			<section className='relative w-full h-screen mx-auto'>
				<HeroBackground/>
				<div className={`${styles.paddingX} absolute inset-0
					top-[120px] max-w-7xl mx-auto
					flex flex-row items-start gap-5`}
				>
						<div className='flex flex-col justify-center items-center mt-5'>
						<div className="w-5 h-5 rounded-full bg-[#915eff]"/>
						<div className="w-1 sm:h-80 h-40 violet-gradient"/>
					</div>

					<div>
						<h1 className={`${styles.heroHeadText} text-white`}>
							Hi, Im <span>n0lo</span>
						</h1>
						<h2 className={`${styles.heroSubText} mt-2
							text-white-100`}>
							I build things for the web <br className='sm:block hidden'/>
						</h2>
					</div>
				</div>
				{/* <ComputersCanvas/> */}
				{/* Botoncito de scroll */}
				<div className="absolute xs:bottom-10 bottom-32 
					w-full flex justify-center items-center left-[600] z-[30]">
					<a href="#about">
						<div className="w-[35] h-[64px] rounded-3x1 border-4
							border-secondary rounded-full flex justify-center items-start p-2">
								<motion.div 
									animate={{
										y: [0, 24, 0]
									}}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										repeatType: 'loop'
									}}
									className='w-3 h-3 rounded-full bg-secondary mb-1'
								/>
						</div>
					</a>
				</div>

				<div className='flex justify-end w-full h-full m-0 z-0 absolute'>
					<img src={heroImg} alt='heroImg'/>
				</div>
			</section>
		</>

	)
}

export default Hero