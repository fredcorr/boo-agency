import style from './Stat.module.scss'
import { StatType } from '_types/cms'

const Stat = ({ statLabel, statValue }: StatType) => {
  return <div className={style.stat}>
    <p className={style.statLabel}>{statLabel}</p>
    <p className={style.statValue}>{statValue}</p>
  </div>
}

export default Stat
