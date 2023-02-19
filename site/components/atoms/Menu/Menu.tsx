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
          <motion.div className={styles.menu}>
            <div className={styles.menuInner}>
              {pages.map(({ url, name }, i) => (
                <Link
                  className={styles.menuItem}
                  data-active={asPath === url}
                  href={url}
                  key={i}
                >
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu
