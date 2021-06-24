import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.png';
import { GetItemList } from '../../APICalls/itemApiCall';
import searchLogo from '../../assets/searchLogo.png';

interface ISearchInfo {
  setData: (data: IProductList) => void;
  setContentStatus: (status: number) => void;
}

const Header: React.FC<ISearchInfo> = ({ setData, setContentStatus }) => {
  const timeoutRef = React.useRef<any>(null);
  const [search, setSearch] = React.useState<string>('');

  const onSearch = async () => {
    if (search !== '') {
      const data = await GetItemList(search);
      if (data !== undefined) {
        setData(data);
        setContentStatus(1);
      }
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
