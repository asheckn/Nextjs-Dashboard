import React from 'react'
import styles from "../../styles/navbar.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
  return (
    <div className={styles.navbar}>

      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
          <LanguageIcon className={styles.icon}/>
            English
          </div>
          <div className={styles.item}>
          <DarkModeIcon className={styles.icon}/>
          </div>

          <div className={styles.item}>
          <NotificationsIcon className={styles.icon}/>
          <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
          <SettingsIcon className={styles.icon}/>
          </div>

          <div className={styles.item}>
          <AccountCircleIcon className={styles.avatar}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar