import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/" exact={true}>
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/favorites" exact={true}>
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/new-meetup" exact={true}>
              New Meetups
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
