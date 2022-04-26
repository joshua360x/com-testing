import React from 'react'

export default function Burger({ description, ingredients, name }) {
  return (
    <ul>
      <h2>{name}</h2>
      {
      ingredients.map((ingredient, i) => (
        <span key={`${ingredient}+${i}`}>{ingredient}  </span>
      ))}
      <p>{description}</p>
    </ul>
  )
}
