var name;
var names = [];
var usertr = document.getElementById("nameTR");

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    Create();
    Read();
    document.getElementById("form").reset();
});

function Create() {
    name = document.getElementById("name").value
    if (name == '') {
        alert("Por favor escribe un Nombre");
    } else {
        names.push(name);
    }
}

function Read() {
    usertr.innerHTML = '';
    usertr.innerHTML += `
        <tr class="table-primary">
            <th class="space">#</th>
            <th class="space">Nombre</th>
            <th class="space">Operaciones</th>
        </tr>   
    `

    for (let i = 0; i < names.length; i++) {
        usertr.innerHTML += `
            <tr>
                <td class="space">${i+1}</td>
                <td class="space">${names[i]}</td>
                <td class="space">
                    <button class="btn btn-info" Onclick="Update(${i})"><i class="fas fa-user-edit"></i> Editar</button>
                    <button class="btn btn-danger" Onclick="Delete(${i})"><i class="fas fa-times"></i>  Eliminar</button>
                </td>
            </tr>
        `
    }
}

function Update(pos) {
    usertr.innerHTML = '';
    usertr.innerHTML += `
        <tr class="table-primary">
            <th class="space">#</th>
            <th class="space">Nombre</th>
            <th class="space">Operaciones</th>
        </tr>
    `
    for (let i = 0; i < names.length; i++) {
        if (i == pos) {
            usertr.innerHTML += `
                <tr>
                    <td class="space">${i+1}</td>
                    <td class="space"><input class="form-control" id="newName" placeholder="${names[i]}" class="space"></input></td>
                    <td class="space">
                        <button class="btn btn-success" Onclick="Update2(${i})"><i class="fas fa-user-edit"></i> Confirmar</button>
                        <button class="btn btn-warning" Onclick="Read()">Cancelar</button>
                    </td>
                </tr>
            `
        } else {
            usertr.innerHTML += `
                <tr>
                    <td class="space">${i+1}</td>
                    <td class="space">${names[i]}</td>
                    <td class="space"></td>
                </tr>
            `
        }
    }
}

function Update2(pos) {
    names[pos] = document.getElementById("newName").value;
    if (names[pos] == '') {
        alert("Ingrese un nombre para modificar");
    } else {
        Read();
    }
}

function Delete(pos) {
    names.splice(pos, 1);
    Read();
}