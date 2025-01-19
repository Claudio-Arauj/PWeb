"use client"

import { searchMovies } from "../actions/movieActions"
import Form from "next/form"
import { useState } from "react" 

export default function Home() {
    const [data, setData] = useState({})

    async function handleAction(formData) {
        const res = await searchMovies(formData)
        setData(res)
    }

    return (
        <div>
            <MovieForm actionHandler={handleAction} />
            {data.Search && <MovieTable movies={data.Search} />}
        </div>        
    )
}

export function MovieForm({ actionHandler }) {
    return (
        <Form action={actionHandler}>
            <label htmlFor="idTitleSearchKey">Título:</label>            
            <input 
                id="idTitleSearchKey" 
                name="titleSearchKey" 
                type="text" 
                placeholder="Digite o título" 
                required 
            />

            <label htmlFor="idTypeSearchKey">Tipo:</label>
            <select id="idTypeSearchKey" name="typeSearchKey">
                <option value="">Todos</option>
                <option value="movie">Filmes</option>
                <option value="series">Séries</option>
            </select>

            <button type="submit">Pesquisar</button>
        </Form>
    )
}

export function MovieTable({ movies }) {
    return (
        <div>
            {movies.length > 0 ? (
                movies.map((m) => (
                    <div key={m.imdbID} className="movie-item">
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
