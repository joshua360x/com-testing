import React, { useEffect, useState } from 'react'
import Burger from './Burger'




export default function List() {
  const [burgers, setBurgers] = useState([])
  const [filteredResults, setFilteredResults] = useState()
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const data = [
    {
      description: 'food is goood',
      name: 'big burger',
      ingredients: ['beef', 'ham', 'lettuce']
    },
    {
      description: 'food is bad',
      name: 'big fish burger',
      ingredients: ['fish', 'tureky', 'tomato']
    }
  ]
  useEffect(() => {
    setBurgers(data)

  }, [])

  function searchHandler(e) {
    setSearch(e.target.value)
    const filteredBurgers = burgers.filter((burger) => 
    burger.name.toLowerCase().includes(e.target.value.toLowerCase().trim())
    )
    setFilteredResults(filteredBurgers);
  }

  // useEffect(() => {

  //   // .then(response => response.json())
  //   // .then(response => console.log(response))
  //   // .catch(err => console.error(err));
  //   async function getBurger() {
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Host': 'burgers1.p.rapidapi.com',
  //         'X-RapidAPI-Key': '6619b0d402mshbef2e4dc706792fp1e3876jsn655f3e2729c8'
  //       }
  //     };
  //     const displayBurger = await fetch('https://burgers1.p.rapidapi.com/burgers', options)
  //     const json = await displayBurger.json();
  //     console.log('json :>> ', json);
  //   };
  //   setIsLoading(false)
  //   getBurger();
  
  // }, [])
  return (
    <>
    {/* { isLoading ? (<h3> Hold On We are Loading your burgers</h3> ) : ( */}
    { isLoading ? (<h3>Loading Burgers...</h3>) : 
      <main>

      <input type="text" placeholder='Burger Search by Name'
      value={search}
      onChange={searchHandler} />
      { filteredResults ? filteredResults.map((burger, i) => (
        <Burger key={`${burger}+${i}`} {...burger} />
        )) :
        burgers.map((burger, i) => (
          <Burger key={`${burger}+${i}`} {...burger} />
          ))
        }
        )
      </main>
      
      }
        </>
  )
}
