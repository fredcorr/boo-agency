import { AnimatePresence, motion } from 'framer-motion'
import { useSettings } from 'contexts/settings'
import { transition } from '_utils/animations'
import styles from './Menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

export interface MenuProps {
  isOpen: boolean
}

const Menu = ({ isOpen }: MenuProps) => {
  const { asPath } = useRouter()
  const { navigation } = useSettings()

  const menuAnim = {
    in: {
      y: '0%',
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ...transition,
      },
    },
    out: {
      y: '-10%',
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.1,
        delayChildren: 0.1,
        ...transition,
      },
    },
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menu}
            transition={transition}
            variants={menuAnim}
            initial="out"
            animate="in"
            exit="out"
          >
            <div className={styles.menuInner}>
              {navigation?.map(({ link, linkLabel, anchorLink }, i) => {
                const url = `${link.slug.current}${
                  anchorLink ? `#${anchorLink}` : ''
                }`
                return (
                  <motion.div variants={menuAnim} key={i}>
                    <Link
                      data-active={asPath === url}
                      className={styles.menuItem}
                      href={url}
                    >
                      {linkLabel || link.title}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu
