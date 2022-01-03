var name;
var names = [];
var names2;
var usertr = document.getElementById("nameTR");

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    Create();
    Read();
    document.getElementById("form").reset();
});

function Create() {
    let storage = JSON.parse(localStorage.getItem("names"));

    name = document.getElementById("name").value;

    if (name == '') {
        alert("Por favor escribe un Nombre");
    } else {
        if (storage == null) {
            names.push(name);
            localStorage.setItem("names", JSON.stringify(names));
        } else {
            names = JSON.parse(localStorage.getItem("names"));
            names.push(name);
            localStorage.setItem("names", JSON.stringify(names));
        }
    }
}

function Read() {
    usertr.innerHTML = '';
    names2 = JSON.parse(localStorage.getItem("names"));
    if (names2 == null) {
        // usertr.innerHTML += `
        //     <tr class="table-primary">
        //         <th class="space">#</th>
        //         <th class="space">Nombre</th>
        //         <th class="space">Operaciones</th>
        //     </tr>
        // `
    } else {
        usertr.innerHTML += `
            <tr class="table-primary">
                <th class="space">#</th>
                <th class="space">Nombre</th>
                <th class="space">Operaciones</th>
            </tr>
        `
        for (let i = 0; i < names2.length; i++) {
            usertr.innerHTML += `
                <tr>
                    <td class="space">${i+1}</td>
                    <td class="space">${names2[i]}</td>
                    <td class="space">
                        <button class="btn btn-info" Onclick="Update(${i})"><i class="fas fa-user-edit"></i> Editar</button>
                        <button class="btn btn-danger" Onclick="Delete(${i})"><i class="fas fa-times"></i>  Eliminar</button>
                    </td>
                </tr>
            `

        }
    }
}

function Update(pos) {
    let names3 = JSON.parse(localStorage.getItem("names"));
    usertr.innerHTML = '';
    usertr.innerHTML += `
        <tr class="table-primary">
            <th class="space">#</th>
            <th class="space">Nombre</th>
            <th class="space">Operaciones</th>
        </tr>
    `
    for (let i = 0; i < names3.length; i++) {
        if (i == pos) {
            usertr.innerHTML += `
                <tr>
                    <td class="space">${i+1}</td>
                    <td class="space"><input class="form-control" id="newName" placeholder="${names3[i]}" class="space"></input></td>
                    <td class="space">
                        <button class="btn btn-success" Onclick="Update2(${i})"><i class="fas fa-user-edit"></i></button>
                        <button class="btn btn-warning" Onclick="Read()">Cancelar</button>
                    </td>
                </tr>
            `
        } else {
            usertr.innerHTML += `
                <tr>
                    <td class="space">${i+1}</td>
                    <td class="space">${names2[i]}</td>
                    <td class="space"></td>
                </tr>
            `
        }
    }
}

function Update2(pos) {
    let names4 = JSON.parse(localStorage.getItem("names"));
    names4[pos] = document.getElementById("newName").value;
    if (names4[pos] == '') {
        alert("Ingrese un nombre para modificar");
    } else {
        localStorage.setItem("names", JSON.stringify(names4));
        Read();
    }
}

function Delete(pos) {
    let names5 = JSON.parse(localStorage.getItem("names"));
    names5.splice(pos, 1);
    localStorage.setItem("names", JSON.stringify(names5));
    Read();
}