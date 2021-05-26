import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(meetUp) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(meetUp);
    });
  }

  function removeFavoriteHandler(meetUpID) {
    setUserFavorites((prevUserFavorite) => {
        prevUserFavorite.splice(meetUpID, 1)
        // prevUserFavorite.filter((e) => {
        //     e.id !== meetUpID
        // })
    })
  }

  function isFavoriteHandler(meetUp) {
      return userFavorites.some(meetUp => {
          meetUp.id === meetUpID
      })
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
