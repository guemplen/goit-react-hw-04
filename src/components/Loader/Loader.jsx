import './loader.modules.css';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <Oval color="#40e0d0" height={30} width={30} />
    </div>
  );
};

export default Loader;
