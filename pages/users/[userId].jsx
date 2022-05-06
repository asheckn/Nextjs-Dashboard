import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TableBox from '../../components/table/Table';
import styles from "../../styles/single.module.scss";
import {useRouter} from 'next/router';
const Single = () => {

const router = useRouter();
const userId = router.query.userId
console.log(userId);

  return (
    <div className={styles.single}>
      <Sidebar />
      <div className={styles.singleContainer}>
        <Navbar/>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.editButton}>Edit</div>
            <h1 className={styles.title}>Information</h1>
            <div className={styles.item}>
              <img src="https://images.pexels.com/photos/2224119/pexels-photo-2224119.jpeg?cs=srgb&dl=pexels-clark-cruz-2224119.jpg&fm=jpg"
               alt=""
                className={styles.itemImg} />
                <div className={styles.details}>
                  <h1 className={styles.itemTitle}>john Doe</h1>
                  <div className={styles.detailItem}>
                    <span className={styles.itemKey}>Email: </span>
                    <span className={styles.itemValue}>janedoe@gmail.com</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.itemKey}>Phone: </span>
                    <span className={styles.itemValue}>+263 772 654 789</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.itemKey}>Address: </span>
                    <span className={styles.itemValue}>75 New Haven</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.itemKey}>Country:</span>
                    <span className={styles.itemValue}>Zimbabwe</span>
                  </div>
                </div>
            </div>

            
          </div>
          <div className={styles.right}>
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className={styles.bottom}>
        <h1 className={styles.title}>Last Trasnactions </h1>
          <TableBox />
        </div>
      </div>
    </div>
  )
}

export default Single