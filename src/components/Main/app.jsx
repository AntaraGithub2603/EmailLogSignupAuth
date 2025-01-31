import styles from './styles.modules.css';

const Main = () => {

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>NOT VALID ONE</h1>
                <button className={styles.white_btn} onClick={handleLogout}> 
                    Logout
                </button>
            </nav>
        </div>
    );
};

export default Main;