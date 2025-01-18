import Form from "next/form";

export default async function MovieForm() {
    return (
        <Form action="/movies">

            <label htmlFor="idTitleSearchKey">Título:</label>
            <input id="idTitleSearchKey" name="titleSearchKey" />

            <label htmlFor="idTypeSearchKey">Tipo:</label>
            <select id="idTypeSearchKey" name="typeSearchKey">
                <option value="movie">Filme</option>
                <option value="series">Série</option>
            </select>

            <button type="submit">Pesquisar</button>
        </Form>
    );
}
