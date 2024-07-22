import React from "react";
import "./Array.css";
import { province } from "../Data/data";

export default function Array() {
  return (
    <div className="array">
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
          {/* je veux changer de couleur par ligne */}
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
