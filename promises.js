// promise.js;
const usuarios = [
  { id: 1, nombre: "Julian", profesion_id: 1 },
  { id: 2, nombre: "Ana", profesion_id: 2 },
  { id: 3, nombre: "Alberto", profesion_id: 1 },
];

const profesion = {
  1: "Programador",
  2: "Educadora",
};

function getUsuarios() {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(usuarios);
    }, 200);
  });
}

function getUsuario(id) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(usuarios.filter((row) => row.id === id)[0]);
    }, 200);
  });
}

function getProfesion(id) {
  return new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved(profesion[id]);
    }, 200);
  });
}

const usuarioBuscado = "Ana";

getUsuarios()
  .then((usuarios) =>
    getUsuario(usuarios.filter((u) => u.nombre === usuarioBuscado)[0].id)
  )
  .then((usuario) => getProfesion(usuario.profesion_id))
  .then((profesion) =>
    console.log(`La profesion de ${usuarioBuscado} es ${profesion}.`)
  );

// getUsuarios((err) => {
//   const usuarioId = usuarios.filter((u) => u.nombre === usuarioBuscado)[0].id;

//   getUsuario(usuarioId, (err, usuario) => {
//     const profesionId = usuario.profesion_id;

//     getProfesion(profesionId, (err, profesion) => {
//       console.log(`La profesion de ${usuarioBuscado} es: ${profesion}`);
//     });
//   });
// });
