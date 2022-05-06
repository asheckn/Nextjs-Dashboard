import React from 'react'
import styles from "../../styles/dataTable.module.scss";
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows} from "../../datatablesource"
import Link from 'next/link'
import { Divider } from '@mui/material';

const DataTable = () => {

const actionColumn = [{
    field: "action",
    headerName:"Action",
    width:200,
    renderCell:()=>{
        return (
            <div className={styles.cellAction}>
              <Link href='/users/superman'>
              <div className={styles.viewButton}>View</div>
              </Link>
              
              
                
                <div className={styles.deleteButton}>Delete</div>
            </div>
        )
    }
}]

  return (
    <div className={styles.dataTable} >
      <div className={styles.datatableTitle}>
        Add New User
        <Link href='/users/new'>
        <div to="/users/new" style={{textDecoration: "none"}} className={styles.link}>
          Add New
        </div>
        </Link>
        
       
      </div>
       
      <DataGrid
      className={styles.dataGrid}
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
        </div>
  )
}

export default DataTable