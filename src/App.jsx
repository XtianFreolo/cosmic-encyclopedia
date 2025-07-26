import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "'/pages/HomePage";
import ContentPage from "./ages/ContentPages";
import NavigateBackButton from "./components/NavigateBackButton";

import styles from ".App.module.css";

function App() {
  const data = [

    {
      id: "Yasuo",
      title: "Yasuo the Feeder",
      content: "Yasuo is a champion in League of Legends known for his high skill ceiling and potential to carry games, but also for being a common source of frustration due to players who feed or play poorly with him."
    },

    {
      id: "Zed",
      title: "Zed the Assassin",
      content: "Zed is a champion in League of Legends known for his burst damage and mobility, often played as an assassin who can quickly eliminate key targets in team fights."
    },

    {
      id: "Teemo",
      title: "Teemo the Scout",
      content: "Teemo is a champion in League of Legends known for his annoying playstyle, using mushrooms to control areas and frustrate opponents with his stealth and speed."
    },

    {
      id: "Lux",
      title: "Lux the Lady of Luminosity",
      content: "Lux is a champion in League of Legends known for her powerful light-based abilities, providing both damage and utility to her team with her crowd control and vision control."
    }
  ];

  return (
    <div className={styles.mainContainer}>
      <BrowserRouter>
        <NavBar data={data} />

        <Routes>
          <Route path="/" element={<HomePage />} />

          {
            data.map(dataElement => (
              <Route
                key={dataElement.id}
                path={`/content/${dataElement.id}`}
                element={<ContentPage data={dataElement} />}
              />

            ))
          }

        </Routes>

        <NavigateBackButton />
      </BrowserRouter>
    </div>
  );
}

export default App; 