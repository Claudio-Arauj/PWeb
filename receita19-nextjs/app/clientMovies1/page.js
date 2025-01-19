"use client"

import { useState } from "react"
import "../styles/global.css"

export default function Home() {
  const [resultMovies, setResultMovies] = useState([])
  const [searchKey, setSearchKey] = useState("") 
  const [isLoading, setIsLoading] = useState(false) 

  async function handleAction(formData) {
    setIsLoading(true) 
    const titleSearchKey = formData.get("titleSearchKey")

    try {
      const httpRes = await fetch(`/api/searchMovies?titleSearchKey=${titleSearchKey}`)
      const jsonRes = await httpRes.json()
      setResultMovies(jsonRes.Search || [])
    } catch (error) {
      console.error("Erro ao buscar filmes:", error)
      setResultMovies([])
    }

    setSearchKey("") 
    setIsLoading(false) 
  }

  return (
    <div>
      <MovieForm 
        handleAction={handleAction} 
        searchKey={searchKey} 
        setSearchKey={setSearchKey} 
        isLoading={isLoading} 
      />
      <MovieTable movies={resultMovies} />
    </div>
  )
}

export function MovieForm({ handleAction, searchKey, setSearchKey, isLoading }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleAction(new FormData(e.target))
      }}
    >
      <label htmlFor="idTitleSearchKey">Título:</label>
      <input
        id="idTitleSearchKey"
        name="titleSearchKey"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        type="text"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Carregando..." : "Pesquisar"}
      </button>
    </form>
  )
}

export function MovieTable({ movies }) {
  return (
    <div className="results">
      {movies.length > 0 ? (
        movies.map((m) => (
          <div className="movie-item" key={m.imdbID}>
            {m.Poster && <img src={m.Poster} alt={m.Title} />}
            <div>
              <h3>{m.Title}</h3>
              <p>{m.Year}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum resultado encontrado</p>
      )}
    </div>
  )
}
