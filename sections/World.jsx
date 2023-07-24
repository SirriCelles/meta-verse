'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| People on the World"
        textStyles="text-center"
      />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
      )}
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute lg:top-10 top-[-0.5] left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>

        {/* Pic divs */}
        <div className="absolute lg:top-[51px] top-[-30%] right-[11%] lg:right-[221px] w-[190px] lg:w-[211px] h-[130px] lg:h-[159px] p-[6px] rounded-[32px] bg-[#5d6680]">
          <img src="/mask-group.png" alt="mask-group" className="w-full h-full" />
          <div className="absolute bottom-[58px] left-[31px] flex flex-row justify-between items-center">
            <div className="flex flex-row justify-start relative">
              <img src="./people-06.png" alt="people" className="w-full h-full mr-[-11px]" style={{ zIndex: 3 }} />
              <img src="./people-05.png" alt="people" className="w-full h-full mr-[-11px]" style={{ zIndex: 2 }} />
              <img src="./people-04.png" alt="people" className="w-full h-full" style={{ zIndex: 1 }} />

            </div>
            <p className="font-normal text-[12px] text-white ml-[8px]">+264 has joined</p>
          </div>
        </div>

        <div className="absolute top-[32%] lg:left-[18%] left-[8%] w-[190px] lg:w-[211px] h-[130px] lg:h-[159px] p-[6px] rounded-[32px] bg-[#5d6680]">
          <img src="/up-down.png" alt="up-down" className="w-full h-full rounded-[32px]" />
          <div className="absolute bottom-[58px] left-[31px] flex flex-row justify-between items-center">
            <div className="flex flex-row justify-start relative">
              <img src="./people-06.png" alt="people" className="w-full h-full mr-[-11px]" style={{ zIndex: 3 }} />
              <img src="./people-05.png" alt="people" className="w-full h-full mr-[-11px]" style={{ zIndex: 2 }} />
              <img src="./people-04.png" alt="people" className="w-full h-full" style={{ zIndex: 1 }} />

            </div>
            <p className="font-normal text-[12px] text-white ml-[8px]">+264 has joined</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
