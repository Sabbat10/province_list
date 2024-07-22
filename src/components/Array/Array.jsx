import React from "react";
import "./Array.css";
import { province } from "../Data/data";

export default function Array() {
  return (
    <div className="array">
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Province</th>
            <th>Chef-Lieu</th>
            <th>Population</th>
            <th>Superficie</th>
          </tr>
        </thead>
        <tbody>
          {province.map((item, index) => (
            <tr key={index}>
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
