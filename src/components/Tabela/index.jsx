const tabelaIMC = () => {
    return (
        <table border='1' style={{ borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th>
                        IMC
                    </th>
                    <th>
                        Classificação
                    </th>
                    <th>
                        Obesidade(Grau)
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Menor que 18,5</td>
                    <td>Abaixo do Peso</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Entre 18,5 e 24,9</td>
                    <td>Peso Normal</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Entre 25 e 29,9</td>
                    <td>Sobrepeso</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Entre 30 e 34,9</td>
                    <td>Obesidade Grau</td>
                    <td>I</td>
                </tr>
                <tr>
                    <td>Entre 35 e 39,9</td>
                    <td>Obesidade Grau</td>
                    <td>II</td>
                </tr>
                <tr>
                    <td>Maior que 40</td>
                    <td>Obesidade Grau</td>
                    <td>III</td>
                </tr>
            </tbody>
        </table>
    )
}

export default tabelaIMC;