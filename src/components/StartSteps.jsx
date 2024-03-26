import {styles} from '../styles';

const StartSteps = ({ number, title, subtitle }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[200px] h-[70px] rounded-[24px] text-center`}
    >
      <p className="font-bold text-[20px] text-white">
      <span className='text-[#03fc73]'> {title}</span>
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default StartSteps;
