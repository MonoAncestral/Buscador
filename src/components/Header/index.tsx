import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.png';
import searchLogo from '../../assets/searchLogo.png';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const history = useHistory();

  /**
   * onSearch
   *
   * @search {string} - estado que guarda lo que el usuario haya digitado en el input de búsqueda
   *
   * Esta función agrega a la página la sección de búsqueda (que automáticamente llamará
   * a la API para buscar items) y le envía la cadena a buscar, es decir, la búsqueda del usuario.
   */
  const onSearch = () => {
    if (search !== '') {
      history.push({ pathname: '/', search: 'items?search=' + search });
    }
  };

  /**
   * handleEnter
   *
   * @key {string} - tecla pulsada por el usuario en el input de búsqueda
   *
   * Es activada cuando el usuario presiona teclas en el input de búsqueda,
   * si la tecla presionada es enter, llamará a la funcion onSearch para que
   * se realice la búsqueda de artículos
   */

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
