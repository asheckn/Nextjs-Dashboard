import styles from "../../styles/widget.module.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {

    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "User",
                isMoney: false,
                link:"See all users",
                icon:(<PersonOutlineIcon className={styles.icon}
                 style={{
                    color: "crimson",
                    backgroundColor: "rgba(255,0,0,0.2)",
                }}
                />),
            };

            break;
        case "order":
                data = {
                    title: "Orders",
                    isMoney: false,
                    link:"See all orders",
                    icon:(<ShoppingCartOutlinedIcon className={styles.icon}
                    style={{
                        color: "gold",
                        backgroundColor: "rgba(255, 217, 0, 0.18)",
                    }}
                    />),
                };
    
                break;
        case "earnings":
                data = {
                        title: "Earnings",
                        isMoney: true,
                        link:"See all Earnings",
                        icon:(<PaidOutlinedIcon className={styles.icon}
                        style={{
                            color: "green",
                            backgroundColor: "rgba(0,255,0,0.2)",
                        }}
                        />),
                    };
        
                    break;
         case "balance":
                data = {
                        title: "Balance",
                        isMoney: true,
                        link:"See all transactions",
                        icon:(<AccountBalanceWalletOutlinedIcon className={styles.icon}
                        style={{
                            color: "purple",
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                        }}
                        />),
                    };
            
                     break;
            default:
            break;


    }



  return (
    <div className={styles.widget}>
        <div className={styles.left}>
            <span className={styles.title}>{data.title}</span>
            <span className={styles.counter}>{data.isMoney && "$"} {amount}</span>
            <span className={styles.link}>{data.link}</span>
        </div>
        <div className={styles.right}>
            <div className={`${styles.percentage} ${styles.positive}`}>
            <KeyboardArrowUpIcon/>
            {diff} %
            </div>
            {data.icon}
        </div>
    </div>
        
  )
}

export default Widget