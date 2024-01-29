import styles from './Layout.module.css'


function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
     <h1>Book Library</h1>
     <p>Sina Dhv | React Project</p>
    </header>
    {children}
    <footer className={styles.footer}><p>Developed By Sina</p></footer>
    
    </>
  )
}

export default Layout
