// Função genérica para montar uma tabela
function criarTabela(dados, colunas) {
    const tabelaHtml = `
        <table border="1">
            <thead>
                <tr>
                    ${colunas.map(coluna => `<th>${coluna}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${dados.map(item => `
                    <tr>
                        ${colunas.map(coluna => `<td>${item[coluna]}</td>`).join('')}
                    </tr>`).join('')}
            </tbody>
        </table>`;
    return tabelaHtml;
}