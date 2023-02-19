import { menuAnim, transition } from '_utils/animations'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './Menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useNavPages } from 'contexts/nav-pages'

export interface MenuProps {
  isOpen: boolean
}

const Menu = ({ isOpen }: MenuProps) => {
  const { asPath } = useRouter()
  const pages = useNavPages()

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
              {pages.map(({ slug, title }, i) => (
                <motion.div
                  variants={menuAnim}
                  key={i}
                >
                  <Link
                    data-active={asPath === slug.current}
                    className={styles.menuItem}
                    href={slug.current}
                  >
                    {title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu
