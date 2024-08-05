import React from 'react'

import { notification } from '@assets/icons'
import { Avatar } from '@radix-ui/themes'

import styles from './header.module.scss'
import Dropdown from '@components/elements/dropdown-menu'
import Search from '@components/elements/search'

const Header = ({ openNav }: any) => {
  return (
    <nav>
      <section className={styles.header}>
        <div className={styles.menu}>
          <button onClick={openNav} className={styles.menu__btn}>
            <div></div>
            <div></div>
            <div></div>
          </button>
          <div className={styles.menu__logo}>
            {/* <img src={logo} alt="Logo" /> */}
            Dashboard
          </div>
        </div>
        <div className={styles.search__container}>
          <Search />
        </div>
        <div className={styles.empty__layer}></div>
        <div className={styles.notification__container}>
          <div>
            <img src={notification} alt="" />
          </div>
          <div className={styles.profile}>
            <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256"
              fallback="A"
              size={'4'}
              radius="full"
            />
            <div className={styles.dropdown}>
              <Dropdown placeholder={'Dunn'} items={['Profile', 'Settings']} />
            </div>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Header
