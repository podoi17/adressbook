(function(){

    const editingForm = document.querySelector('#editing-form')
    console.log(editingForm);
    editingForm.addEventListener('submit',function(evt) {
        evt.preventDefault();
    })

    const save = document.querySelector('.save-button');
    console.log(save);
    save.addEventListener('click', function() {

        function createElement(inputSelector) {
            //spricht textfield an
            const inputTF = document.querySelector(inputSelector);
            //packt den wert in eine variable
            const value = inputTF.value;
            //kreiert eine tabellenzelle
            const element = document.createElement('td');
            //packt den wert in die zelle
            element.innerHTML = value;
            return element;
        }

        //erzeugt eine row
        const row = document.createElement('tr');
        row.classList.add('table-body-row');




        const firstNameElement = createElement('#first-name');
        const nameElement = createElement('#last-name');
        const emailElement = createElement('#email');

        //packt das td element in eine reihe
        row.appendChild(firstNameElement);
        row.appendChild(nameElement);
        row.appendChild(emailElement);

        // reihe wird in die tabelle hinzugefügt
        const table = document.querySelector('.table-body');
        //reihe wird in die tabelle gepackt
        table.appendChild(row);


        row.addEventListener('click', evt => {
            //gibt element auf welches geklickt wurde
            //würde funktionieren, da nicht die das einzelne td angesprochen wird sondern
            //das parentElement tr(row)
            //const clicked = evt.target.parentElement;

            //const inputTF = document.querySelector('#first-name');
            const firstNameField = editingForm.querySelector('#first-name');
            const nameField = document.querySelector('#last-name');
            const emailField = editingForm.querySelector('#email');

            const current = document.querySelector('.table-body-row--selected');

            //mit if(current) wird gecheckt ob auf ieiner row schon die klasse selected
            //wenn nicht null ist, ieine row sie schon besitzt, wird sie entfernt
            if(current) {
                current.classList.remove('table-body-row--selected');
            }
            row.classList.toggle('table-body-row--selected');
            firstNameField.value = firstNameElement.innerHTML;
            nameField.value = nameElement.innerHTML;
            emailField.value = emailElement.innerHTML;

        });


    })

    const cancle = document.querySelector('.cancle-button');
    cancle.addEventListener('click', function() {
        const asideWrapper = document.querySelector('.aside-wrapper');
        //ändert attribute vom tag aside
        asideWrapper.setAttribute('aria-hidden','true');
    });

    const create = document.querySelector('.create-button');
    create.addEventListener('click', function(evt) {
        evt.preventDefault();
        const asideWrapper = document.querySelector('.aside-wrapper');
        asideWrapper.setAttribute('aria-hidden','false');
    });

    const deleteButton = document.querySelector('.delete-button');
    deleteButton.addEventListener('click', function(evt) {
        evt.preventDefault();

        const selectedRow = document.querySelector('.table-body-row--selected');

        if(selectedRow) {
            selectedRow.remove();
            /*
            const cells = selectedRow.querySelectorAll('td');
            console.log(cells);
            cells.forEach(function(cell){
                cell.innerHTML = 'nichts';
            })*/
        }

    })

    const searchTF = document.querySelector('.filter');
    searchTF.addEventListener('input', function(evt) {
        console.log(searchTF.value);
        const allTableRows = document.querySelectorAll('.table-body-row');

        allTableRows.forEach(function(row){
            row.style.display = 'table-row';
            const secondCell = row.querySelector('td:nth-child(2)');
            console.log(secondCell.innerHTML);
            const searchString = searchTF.value.toLowerCase();
            const nameString = secondCell.innerHTML.toLowerCase();
            if(!nameString.startsWith(searchString)) {
                row.style.display = 'none';
            }
        })

    })


})();

