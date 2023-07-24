"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";

import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreWorlds } from '../constants';

const Explore = () => (
  <section
    className={`${styles.paddings}`}
    id="explore"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=""
    >

    </motion.div>
    Explore
  </section>
);

export default Explore;
