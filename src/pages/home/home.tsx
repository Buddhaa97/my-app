import logo from '../../assets/logo.svg';
import Header from '../../components/header/header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="app">
        <h2>Home</h2>
        <div className="appBody">
          <img src={logo} className="App-logo" />
        </div>
      </div>
    </>
  );
};
export default Home;
