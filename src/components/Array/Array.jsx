import React from "react";
import "./Array.css";
import { province } from "../Data/data";
import Chekbox from "./Checkbox/Checkbox";

export default function Array() {
  return (
    <div className="array">
      <h1> Liste des province de la RDC</h1>
      {/* les checkbox */}
      <div className="checkbox">
        <p>Selectionner les provinces selon leur regroupement</p>
        <div className="checkbox-1">
          <Chekbox name="Kasaï-Occidental" value="" />
          <Chekbox name="Kasaï-Oriental" value="" />
          <Chekbox name="Grand-Katanga" value="" />
          <Chekbox name="Bandundu" value="" />
        </div>
        <div className="checkbox-1">
          <Chekbox name="Bas-Congo" value="" />
          <Chekbox name="Equateur" value="" />
          <Chekbox name="Kinshasa" value="" />
          <Chekbox name="Maniema" value="" />
        </div>
        <div className="checkbox-1">
          <Chekbox name="Kindu" value="" />
          <Chekbox name="Goma" value="" />
          <Chekbox name="Nord-kivu" value="" />
          <Chekbox name="Sud-kivu" value="" />
        </div>
      </div>

      {/* les tableaux */}
      <table>
        <thead>
          <tr>
            <th>
              <b>№</b>
            </th>
            <th>Province</th>
            <th>Chef-Lieu</th>
            <th>Population</th>
            <th>Superficie</th>
          </tr>
        </thead>
        <tbody>
          {/* les lignes des tableaux */}
          {province.map((item, index) => (
            <tr
              key={{ index }}
              className={index % 2 === 0 ? "color-grid" : "color-yellow"}
            >
              <td>{index + 1}</td>
              <td>{item.nom}</td>
              <td>{item.chefLieu}</td>
              <td>{item.population}</td>
              <td>{item.superficie}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
