import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.png';
import searchLogo from '../../assets/searchLogo.png';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const timeoutRef = React.useRef<any>(null);
  const [search, setSearch] = React.useState<string>('');
  const history = useHistory();

  const onSearch = async () => {
    if (search !== '') {
      history.push({ pathname: '/', search: 'items?search=' + search });
    }
  };

  React.useEffect(() => {
    if (timeoutRef.current !== null) {
      //Si hay un timeout ejecutándose y el usuario vuelve a crear otro (al escribir), se limpia
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      onSearch();
    }, 400);
  }, [search]);
  return (
    <div className="HeaderFather">
      <div className="HeaderContent">
        <div>
          <img className="Logo" src={logo} alt="logo Mercado Libre"></img>
          <input
            placeholder="Nunca dejes de buscar"
            type="text"
            className="BrowserInput"
            onChange={(value) => setSearch(value.target.value)}
          />
          <button onClick={onSearch}>
            <img src={searchLogo} alt="lupa"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
