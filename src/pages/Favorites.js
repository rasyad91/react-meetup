import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../components/store/favorites-context";

function FavoritesPage() {
  const favoritexCtx = useContext(FavoritesContext);

  let content;

  if (favoritexCtx.totalFavorites === 0) {
    content = <h2>You have no favorites yet. Start adding some?</h2>;
  } else {
    content = (
      <section>
        <h1>Favorites Page</h1>
        <MeetupList meetups={favoritexCtx.favorites}></MeetupList>
      </section>
    );
  }

  return content;
}

export default FavoritesPage;
