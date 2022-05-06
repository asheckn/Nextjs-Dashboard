import {useContext} from 'react';
import styles from "../../styles/sidebar.module.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {DarkModeContext} from '../../context/darkModeContext';
import Link from 'next/link'

const Sidebar = () => {

   const {dispatch} = useContext(DarkModeContext);

   return (
      <div className={styles.sidebar}>
         <div className={styles.top}>
            
               <span className={styles.logo}>Next Dash</span>
           
         </div>
         <hr className='hr' />
         <div className={styles.center}>
            <ul>
               <p className={styles.title}>MAIN</p>
               <li>
                  <DashboardIcon className={styles.icon} />
                  <Link href='/home'>
                  <span>DashBoard</span>
                  </Link>
                  
                  

               </li>
               <p className={styles.title}>LISTS</p>
               <li>
                  <GroupIcon className={styles.icon} />
                  <Link href='/users'>
                     <a>
                     <span>Users</span>
                     </a>
                     
                     </Link>

               </li>
               <li>
                  <StoreMallDirectoryIcon className={styles.icon} />
                  <Link href='/products'>
                     <span>Products</span>
                     </Link>

               </li>
               <li>
                  <CreditCardIcon className={styles.icon} />
                  <span>Orders</span>
               </li>
               <p className={styles.title}>SERVICE</p>

               <li>
                  <QueryStatsIcon className={styles.icon} />
                  <span>Stats</span>
               </li>
               <li>
                  <CircleNotificationsIcon className={styles.icon} />
                  <span>Notifications</span>

               </li>
               <li>
                  <SettingsIcon className={styles.icon} />
                  <span>Settings</span>

               </li>
               <p className={styles.title}>USER</p>
               <li>
                  <AccountCircleIcon className={styles.icon} />
                  <span>Profile</span>
               </li>
               <li>
                  <LogoutIcon className={styles.icon} />
                  <span>Logout</span>

               </li>
            </ul>
         </div>
         <div className={styles.bottom}>
            <div className={styles.colorOption} onClick={()=>dispatch( {type: "LIGHT"})}></div>
            <div className={styles.colorOption} onClick={()=>dispatch( {type: "DARK"})}></div>
         </div>

      </div>
   )
}

export default Sidebar