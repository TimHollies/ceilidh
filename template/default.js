module.exports = ({ name, duration, set, tune, author, dance}) => `
<html>
    <head></head>
    <body>
        <h1>${name}</h1>
        <p>${duration} | ${set} | ${tune} | ${author}</p>
        <table>
            <tbody>
                ${Object.keys(dance).map(section => `
                    <tr>
                        <td>${section}</td>
                        <td>${typeof dance[section] === 'string' ? 
                            dance[section] :
                            dance[section].map(subsection => subsection.instruction).join('<br />')
                        }</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>

    </body>
</html>`;