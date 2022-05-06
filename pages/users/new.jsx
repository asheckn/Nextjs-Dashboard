import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import  DriveFolderUploadOutlinedIcon  from '@mui/icons-material/DriveFolderUploadOutlined';
import styles from "../../styles/new.module.scss";
import { useState } from 'react';

const New = ({inputs, title}) => {

  const [file, setFile] = useState("");


  return (
    <div className={styles.new}>
        <Sidebar />
        <div className={styles.newContainer}>
          <Navbar />
          <div className={styles.top}>
            <h1>{title}</h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              className={styles.img}
               alt="" />
            </div>
            <div className={styles.right}>
              <form action="">
              <div className={styles.formInput}>
                  <label htmlFor='file' >Image: <DriveFolderUploadOutlinedIcon className={styles.icon}/></label>
                  <input type="file" onChange={e=>setFile(e.target.files[0])} id='file' style={{display: "none"}}/>
                </div>


                <div className={styles.formInput}>
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder='john_doe' />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="">Fullname</label>
                  <input type="text" placeholder='John Doe' />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder='john_doe@gmail.com' />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="">Phone</label>
                  <input type="text" placeholder='+263 778 348 169' />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="">Password</label>
                  <input type="password" />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Doe House 420 Street Harare' />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="">Country</label>
                  <input type="text" placeholder='Zimbabwe' />
                </div>

                {/* {inputs.map((input) => (
                  <div className='formInput' key={input.id}> 
                    <label htmlFor={input.name}>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ))} */}

                <button className={styles.send}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New