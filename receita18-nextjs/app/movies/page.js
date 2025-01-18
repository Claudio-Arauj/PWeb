export default async function Home({searchParams}){    

    const {titleSearchKey = 'city'} = await searchParams
    const {typeSearchKey = 'movie'} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=1cf73dcb&s=${titleSearchKey}&type=${typeSearchKey}`)
    const data = await res.json()

    return (
        <div>
            <div>
                {data.Search.map((m) => (
                    <div key={m.imdbID}>
                        <p>{m.Title} --- {m.Year}</p>
                        <img src={m.Poster} alt={`${m.Title} Poster`} style={{ maxWidth: '200px', height: 'auto' }} />
                    </div>  
                ))}            
            </div>
        </div>
    )
}