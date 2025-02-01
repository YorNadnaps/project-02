import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

/** Random change. */

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h2>Learn & Master GitHub Actions</h2>
        <span>Hello</span>
      </header>
      <MainContent />
    </>
  );
}

export default App;
