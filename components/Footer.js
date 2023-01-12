import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul class="mylinks">
             <li><a href="https://www.yelp.com/biz/hero-remodeling-inc-los-angeles-2" target="_blank">Check us on Yelp</a></li>
             <li><a href="https://fargosoftware.netlify.app/" target="_blank">Made by Fargo Software</a></li>
        </ul>      
    </footer>
    </>
  )
}
