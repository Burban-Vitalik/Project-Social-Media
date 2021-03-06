import { Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import { Profile } from './component/Profile/Profile';
import Users from './component/Users/Users';
import Dialogs from './component/Dialogs/Dialogs';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import AuthorizationPage from './component/Authorization/AuthorizationPage';


function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.appCenter}>
        <aside className={styles.appAsideLeft}>
          <Navbar />
        </aside>
        <div className={styles.appContent}>
          <Route path={'/profile'} component={Profile} />
          <Route path={'/messages'} component={DialogsContainer} />
          <Route path={'/users'} component={Users} />
          <Route path={'/authorization'} component={AuthorizationPage} />
      </div>
      </main>
    </div>
  );
}

export default App;
