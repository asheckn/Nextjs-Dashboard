import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import styles from '../../styles/home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
       <Sidebar/>
       <div className={styles.homeContainer}>
         <Navbar/>
         <div className={styles.widgets}>
           <Widget type="user"/>
           <Widget type="order"/>
           <Widget type="earnings"/>
           <Widget type="balance"/>
         </div>

         <div className={styles.charts}>
           <Featured/>
           <Chart aspect={2/1}  title="Last 6 months (revenue)"/>
         </div>
         <div className={styles.listContainer}>
          <div className={styles.listTitle}>Latest Transactions</div>
          <Table/>
         </div>
         </div>
    </div>
  ) 
}

export default Home
