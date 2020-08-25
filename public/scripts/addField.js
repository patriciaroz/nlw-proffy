// procurar o botão, quando clicar no botão
document.querySelector("#add-time").addEventListener('click', cloneField)

// executar uma ação
function cloneField() {
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // pegar os campos
    const fields = newFieldContainer.querySelectorAll('input');

    // limpar os campos
    fields.forEach(function(field) {
        field.value = "";
    });

    // colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}