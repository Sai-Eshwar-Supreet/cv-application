function Header({handleReset, handleExampleLoad}){
    return <header className="header">
        <h1>CV Application</h1>
        <ul>
          <li>
            <button onClick={handleReset}>Reset</button>
          </li>
          <li>
            <button onClick={handleExampleLoad}>Load Example</button>
          </li>
        </ul>
      </header>
}

export default Header;