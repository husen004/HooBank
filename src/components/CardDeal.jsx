import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h4 className={`${styles.heading2} m`}>Find a better card deal <br className='sm:block hidden'/>
        in few easy steps</h4>
        <p className={`${styles.paragraph} mt-8 max-w-[480px]`}>We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.</p>
        <Button styles={'mt-8'} />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt='card' className={`w-[100%] h-[100%] `} />
      </div>
    </section>
  )
}

export default CardDeal