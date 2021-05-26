import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (meetupID) => {},
  isFavorite: (meetUpID) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(meetUp) {
    console.log("addFavorite called")
    console.log(meetUp)
    console.log(userFavorites)

    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(meetUp);
    });
  }

  function removeFavoriteHandler(meetUpID) {
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.filter(e => e.id !== meetUpID);
      // prevUserFavorite.splice(meetUpID, 1);
    });
  }

  function isFavoriteHandler(meetUpID) {
    console.log("isfavorite called")
    console.log("meetupID: " + meetUpID)

    userFavorites.some((meetUp) => {
      console.log("meetUp.id: "+meetUp.id)
      console.log("meetUpID: "+meetUpID)
      console.log(meetUp.id === meetUpID)
      return meetUp.id === meetUpID});
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
