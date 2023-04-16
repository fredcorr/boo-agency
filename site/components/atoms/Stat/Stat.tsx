import { Animations } from '_utils/animations'
import style from './Stat.module.scss'
import { motion } from 'framer-motion'
import { StatType } from '_types/cms'

const Stat = ({ statLabel, statValue, number }: StatType) => {
  const { fadeRightToLeft, fadeLeftToRight } = new Animations()

  return (
    <motion.div
      variants={fadeRightToLeft({ delay: 0.5 })}
      viewport={{ once: true, amount: 0.8 }}
      className={style.stat}
      whileInView="visible"
      data-number={number}
      initial="hidden"
      exit="hidden"
    >
      <p className={style.statLabel}>{statLabel}</p>
      <p className={style.statValue}>{statValue}</p>
    </motion.div>
  )
}

export default Stat
