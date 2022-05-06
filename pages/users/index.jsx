import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DataTable from '../../components/dataTable/DataTable'
import styles from "../../styles/list.module.scss";

const list = () => {
  return (
    <div className={styles.list}>
      <Sidebar />
      <div className={styles.listContainer}>
        <Navbar/>
        <DataTable />
      </div>
    </div>
  )
}

export default list