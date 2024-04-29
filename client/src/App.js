import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "./state/atoms/UserState";

import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import GameCard from "./components/GameCard";

import Container from "react-bootstrap/esm/Container";

function App() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // console.log("User:", currentUser);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/auto_login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setCurrentUser(response.data);
        })
        .catch((error) => {
          console.error("Error during auto-login:", error);
        });
    }
  }, []);

  useEffect(() => {
    axios.get("/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  const displayGames = games.filter((game) =>
  game.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  // console.log(games)

  return (
    <Container>
      <Header />
      {currentUser ? (
        <>
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/games" element={<GameCard games={displayGames} searchTerm={searchTerm} onSearchChange={setSearchTerm} />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </Container>
  );
}

export default App;
