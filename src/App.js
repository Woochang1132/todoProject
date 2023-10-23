import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { DarkMdoeProvider } from "./components/TodoContext/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <DarkMdoeProvider>
        <Header
          filters={filters}
          filter={filter}
          onFilterChange={(filter) => setFilter(filter)}
        />
        <TodoList filter={filter} />
      </DarkMdoeProvider>
    </>
  );
}

export default App;
