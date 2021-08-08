import styles from './App.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import HomePage from './HomePage';
import WorkPage from './WorkPage';

function App(props) {
  const { location } = props;
  console.log(location)
  return (
    <div className={styles.App}>
        <header className={styles.header}>
          <div className={styles.header_nav}>
            <div className={styles.navleft}>
              <Link to='/'><p >Home</p></Link>
            </div>
            <div className={styles.navright}>
              <Link to ='/'><p className={location.pathname==="/"?styles.selected:null}>Home</p></Link>
              <Link to="/works"><p className={location.pathname==="/works"?styles.selected:null}>Works</p></Link>
            </div>
          </div>
      </header>
      <section className={styles.content}>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/works" exact component={WorkPage}/>
          {/* <Route path="/works:id">
            <WorkDetail />
          </Route> */}
        </Switch>
      </div>
      </section>
      <footer className={styles.footer}>
        <p><b>Ruolin Qu</b></p>
        <p>Antra.com</p>
      </footer>
      </div>
  );
}

export default withRouter(App);
