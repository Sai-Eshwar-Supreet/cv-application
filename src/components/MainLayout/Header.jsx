import { ICONS } from '../../Helpers/Icons';
import '../../styles/Header.css';

function Header({handleReset, handleExampleLoad}){
    return <header className="header">
        <div className='logo'>
            {ICONS.logo}
            <h1 className='title'> CV Application</h1>
        </div>
        <ul className='tool-bar'>
          <li>
            <button className='tool reset' onClick={handleReset}>{ICONS.restore} Reset</button>
          </li>
          <li>
            <button className='tool load' onClick={handleExampleLoad}>{ICONS.sparkle} Load Example</button>
          </li>
        </ul>
      </header>
}

export default Header;