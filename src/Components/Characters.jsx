import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Search from "./Search";

import useCharacters from "../hooks/useCharacters";
import Card from "./Card";

const API = "https://rickandmortyapi.com/api/character/";

//parte1 de useReducer
const initialState = {
  favorites: [],
};

//parte2 hacer la logica del reducer
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "Agregar":
      const isExist = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (isExist) return { ...state };
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "Eliminar":
      return {
        ...state,
        favorites: state.favorites.filter(
          (items) => items.id !== action.payload
        ),
      };

    default:
      //si noy nada lo vuelve igual
      return state;
  }
};

//Declaración de los diferente use
const Characters = () => {
  //parte 3 crear variables del reducer
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  //Parte 1 de useMemo
  const [search, setSearch] = useState("");
  //Parte 1 useRedf
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  //parte 4 use usereducer
  const handleClick = (favorite) => {
    dispatch({ type: "Agregar", payload: favorite });
  };

  const handleClickRemove = (id) => {
    dispatch({ type: "Eliminar", payload: id });
  };

  //parte 2 de useMemo constante manejar busqueda
  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  //parte 4 useMemo filtrar personajes sin useMemo
  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // })

  //parte 4 useMemo filtrar personajes
  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters container">
      {/* Muestra visual mente los agregados*/}

      <h2>Agregados</h2>
      <div className="">
        <div className="row Characters">
          {favorites.favorites.map((favorite) => (
            <div className="col-6 col-md-3" key={favorite.id}>
              <Card
                {...favorite}
                isFavorite={true}
                handleClickRemove={handleClickRemove}
              />
            </div>
          ))}
        </div>
      </div>

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      {/* parte 3 useMemo */}
      {/* <div className="Search pb-3 pt-3">
        <input
          type="text"
          value={search}
          // parte 2 useRef
          ref={searchInput}
          onChange={handleSearch}
        />
      </div> */}

      {/* Boton Agregar y logica  useReducer */}
      <h2>Personajes</h2>
      <div className="row">
        {filteredUsers.map((character) => (
          <div className="item" key={character.id}>
            <div className="col">
              <div className="pt-3">
                <>
                  <div className="card bg-warning">
                    <div className="d-flex justify-content-center">
                      <img
                        className="img-fluid rounded-circle w-25"
                        src={character.image}
                        alt=""
                      />
                    </div>
                    <h5 className="">{character.name}</h5>
                    <h5 className="">{character.status}</h5>
                    <h5 className="">{character.species}</h5>
                    <h5 className="">{character.gender}</h5>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => handleClick(character)}
                    >
                      Agregar
                    </button>
                  </div>
                </>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
