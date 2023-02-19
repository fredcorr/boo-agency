import { menuAnim, transition } from '_utils/animations'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './Menu.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

export interface MenuProps {
  isOpen: boolean
}

const Menu = ({ isOpen }: MenuProps) => {
  const { asPath } = useRouter()

  const pages = [
    { url: '/why-boo', name: 'Why Boo' },
    { url: '/what-we-offer', name: 'What We Offer' },
    { url: '/contact', name: 'Contact' },
  ]
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
              {pages.map(({ url, name }, i) => (
                <motion.div
                  variants={menuAnim}
                  key={i}
                >
                  <Link
                    data-active={asPath === url}
                    className={styles.menuItem}
                    href={url}
                  >
                    {name}
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
