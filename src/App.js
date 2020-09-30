import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import Loader from "./Loader/Loader";
import { Country } from "./Country/Country";
import { Input } from "./Input/Input";
function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [listLength, setListLength] = useState(10);
  const [buttonActive, setButtonActive] = useState(0);
  const getData = () => {
    setLoading(true);
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        const filteredCountries = res.data.map((item) => {
          return {
            flag: item.flag,
            name: item.name.toLowerCase(),
            capital: item.capital,
            region: item.region,
            subregion: item.subregion,
            population: item.population,
            nativeName: item.nativeName,
            languages: item.languages,
          };
        });
        setCountries(filteredCountries);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {}, []);
  useEffect(() => {
    setFilteredCountries(
      countries.filter((country, index) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, countries, listLength]);
  const renderButtons = () => {
    const limits = [10, 20, 50];
    const buttons = limits.map((item, index) => {
      return (
        <button
          key={item + Math.random()}
          className={
            "btn btn-primary " + (index === buttonActive ? "active" : "")
          }
          onClick={(e) => {
            setButtonActive(index);
            setListLength(item);
          }}
        >
          {item}
        </button>
      );
    });
    return buttons;
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row pt-5 ">
          <h1 className="text-white">Тестовое задание</h1>
          <Input
            onChange={(e) => {
              getData();
              setSearch(e.target.value.trim());
            }}
          />
          {renderButtons()}
        </div>
        {isLoading ? <Loader /> : null}
        <div className="countries row">
          {filteredCountries.map((item, index) => {
            if (index < listLength) {
              return <Country key={index + Math.random()} country={item} />;
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
