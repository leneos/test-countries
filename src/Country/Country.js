import React from "react";

export const Country = (props) => {
  const info = props.country;
  return (
    <div className="mt-5 col-md-4 ">
      <div className="country-card">
        <img src={info.flag} width="100px" alt="" />
        <h2>
          <span className="text-capitalize">{info.name}</span>
        </h2>
        <ul className="card-list">
          <li>Capital: {info.capital}</li>
          <li>{info.region + ", " + info.subregion}</li>
          <li>
            Population: <strong>{info.population}</strong> people
          </li>
          <li>Native name: {info.nativeName}</li>
          <li>
            Languages:&nbsp;
            {info.languages.map(
              (lang, index) =>
                lang.name + (index + 1 !== info.languages.length ? ", " : "")
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
