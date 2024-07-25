import styles from "../style"
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginX} ${styles.padding} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow `}>
    <div className="flex-1 flex flex-col">
      <h4 className={`${styles.heading2}`}>Come try our service now!</h4>
      <p className={`${styles.paragraph} max-w-[450px] mt-[6px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
    <Button/>

    </div>
  </section>
)
  


export default CTA