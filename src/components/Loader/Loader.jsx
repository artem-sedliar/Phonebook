import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Grid } from 'react-loader-spinner';

import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loaderWrap}>
      <Grid color="#4985ff" height={100} width={100} />
    </div>
  );
};

export default Loader;
