import { Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './component/Header/Header';
import Dialogs from './component/Dialogs/Dialogs';
import Navbar from './component/Navbar/Navbar';
import { Profile } from './component/Profile/Profile';
import Users from './component/Users/Users';


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
          <Route path={'/messages'} component={Dialogs} />
          <Route path={'/users'} component={Users} />
      </div>
      </main>
    </div>
  );
}

export default App;
