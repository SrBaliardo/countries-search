import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context";
import ListItem from "../ListItem";
import * as C from "./styles";
import { setBorders } from "../../functions/setBorders";

const CountryInfoCard = ({
  countryName,
  background,
  nativeName,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
}) => {
  const [bordersCountries, setBordersCountries] = useState("");
  const navigate = useNavigate();
  const { darkMode } = useContext(DataContext);
  const currenciesKeys =
    typeof currencies === "object" ? Object.keys(currencies) : "Desconhecido";
  const currenciesString =
    typeof currenciesKeys === "string"
      ? currenciesKeys
      : currencies[currenciesKeys[0]]["name"];

  useEffect(() => {
    async function setBordersArray() {
      if (borders.length) {
        const listOfBorders = await setBorders(borders);
        setBordersCountries(listOfBorders);
      }
    }
    setBordersArray();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {" "}
      <C.BackButton
        className="animeBottom"
        onClick={() => navigate(-1)}
        darkMode={darkMode}
      >
        Voltar
      </C.BackButton>
      <C.MainConteiner darkMode={darkMode} className="animeBottom">
        <C.Flag darkMode={darkMode} background={background} />
        <C.InfoContent>
          <h4>{countryName}</h4>
          <C.DataList>
            <ul>
              <ListItem listItem={"Nome Nativo"} value={nativeName} />
              <ListItem listItem={"População"} value={population} />
              <ListItem listItem={"Região"} value={region} />
              <ListItem listItem={"Sub Região"} value={subregion} />
              <ListItem listItem={"Capital"} value={capital} />
            </ul>
            <ul>
              <ListItem listItem={"Código do País (ccTLD)"} value={tld} />
              <ListItem listItem={"Moedas"} value={currenciesString} />
              <ListItem listItem={"Idiomas"} value={languages} />
            </ul>
          </C.DataList>
          <C.BorderCountriesList>
            <span>
              <b>
                <span className="span_block">Países que fazem Fronteira: </span>
                {bordersCountries.length
                  ? bordersCountries.map((e, i) => (
                      <C.BordersButton
                        onClick={() => navigate(`/country/${borders[i]}`)}
                        key={i}
                        darkMode={darkMode}
                      >
                        {e}
                      </C.BordersButton>
                    ))
                  : "Desconhecido"}
              </b>
            </span>
          </C.BorderCountriesList>
        </C.InfoContent>
      </C.MainConteiner>
    </div>
  );
};

export default CountryInfoCard;
