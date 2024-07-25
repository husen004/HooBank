import { stats } from '../constans'
import styles from '../style'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex flex-row justify-start items-start m-3`}>
          <h4 className='font-poppins font-semibold text-white xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] '>{stat.value}</h4>
          <p className='font-poppins font-normal text-gradient ml-3 xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]'>{stat.title}</p>
        </div>
      ))}
  </section>
)

export default Stats