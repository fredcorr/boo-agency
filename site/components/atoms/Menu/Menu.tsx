import { menuAnim, transition } from '_utils/animations'
import { AnimatePresence, motion } from 'framer-motion'
import { useSettings } from 'contexts/settings'
import styles from './Menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

export interface MenuProps {
  isOpen: boolean
}

const Menu = ({ isOpen }: MenuProps) => {
  const { asPath } = useRouter()
  const { navigation } = useSettings()

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
