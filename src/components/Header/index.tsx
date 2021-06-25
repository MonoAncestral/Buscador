import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.png';
import searchLogo from '../../assets/searchLogo.png';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const history = useHistory();

  const onSearch = () => {
    if (search !== '') {
      history.push({ pathname: '/', search: 'items?search=' + search });
    }
  };

  const handleEnter = (key: string) => {
    if (key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="HeaderFather">
      <div className="HeaderContent">
        <div>
          <img className="Logo" src={logo} alt="logo Mercado Libre"></img>
          <input
            placeholder="Nunca dejes de buscar"
            type="text"
            className="BrowserInput"
            onKeyDown={(a) => handleEnter(a.key)}
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
