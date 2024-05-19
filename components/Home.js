import Image from 'next/image';
import DarkStatus from './DarkStatus';
import styles from '../styles/Home.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { isDarkOrLight } from '../reducers/dark';

function Home() {
  const dispatch = useDispatch();

  const dark = useSelector((store) => store.dark.value);

  let style = {};
  let mode = '';
  if (dark) {
    style = { 'background-color': 'black' };
    mode = 'dark';
  } else {
    mode = 'light'
  };

  return (
    <div className={styles.container} style={style}>
      <Image src={`/${mode}.png`} alt={mode} width={128} height={128} id="switch" className={styles.switch} onClick={() => dispatch(isDarkOrLight())} />
      <DarkStatus />
    </div>
  );
}

export default Home;
