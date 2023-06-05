import React, { useState, useEffect } from "react";
import IProps from "./interfaces/IProps";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

import axios, { AxiosError } from "axios";
function App() {
  const API_URL = "http://localhost:3001/people";
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [people, setPeople] = useState<IProps["people"][]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get<IProps["people"][]>(API_URL, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 1000,
        });
        if (response.status !== 200)
          throw Error("Did not receive expected data");
        const listPeople = response.data;
        setPeople(listPeople);
        setFetchError(null);
      } catch (err: any) {
        if (err instanceof AxiosError) {
        }

        if (err.code) setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => fetchItems(), 2000);
  }, []);
  return (
    <main>
      <div className="App">
        <h1>People invited to my Party</h1>

        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <List people={people} setPeople={setPeople} />
        )}
        <AddToList people={people} setPeople={setPeople} />
      </div>
    </main>
  );
}

export default App;
