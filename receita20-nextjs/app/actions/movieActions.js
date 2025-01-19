'use server'

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey")
    const typeSearchKey = formData.get("typeSearchKey") 

    if (!titleSearchKey || titleSearchKey.trim() === '') {
        return { Search: [] }
    }

    const queryParams = new URLSearchParams({
        apikey: '1cf73dcb',
        s: titleSearchKey,
    })
    if (typeSearchKey && typeSearchKey.trim() !== '') {
        queryParams.append('type', typeSearchKey)
    }

    try {
        const httpRes = await fetch(`http://www.omdbapi.com/?${queryParams.toString()}`)
        const jsonRes = await httpRes.json()
        return jsonRes
    } catch (err) {
        return { error: `Erro na requisição: ${err.message}` }
    }
}
