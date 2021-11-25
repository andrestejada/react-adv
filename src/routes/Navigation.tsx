import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<p>Cargando</p>}>
      <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            {
              routes.map(({path,name})=>(
                <li key={path} >
                  <NavLink to={path} activeClassName='nav-active' >{name}</NavLink>
                </li>
              ))
            }
            {/* <li>
              <NavLink to="/lazy1" activeClassName="nav-active" exact>Lazy 1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>Lazy 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>Lazy 3</NavLink>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {
            routes.map( ({path,Component})=>(
              <Route
                key={path} 
                path={path}
                render={()=><Component/>}
              />
            ))
          }
          <Redirect to={routes[0].path} />
          
        </Switch>
      </div>
    </Router>
    </Suspense>
    
  );
}