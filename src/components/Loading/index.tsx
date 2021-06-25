import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';
import './styles.scss';

const Loading: React.FC = () => {
  return (
    <div className="Loading">
      <Loader
        type="Oval"
        color="#3483FA"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Loading;
