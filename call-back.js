const usuarios = [
  { id: 1, nombre: "Julian", profesion_id: 1 },
  { id: 2, nombre: "Ana", profesion_id: 2 },
  { id: 3, nombre: "Alberto", profesion_id: 1 },
];

const profesion = {
  1: "Programador",
  2: "Educadora",
};

function getUsuarios(callback) {
  setTimeout(() => {
    callback(null, usuarios);
  }, 200);
}

function getUsuario(id, callback) {
  setTimeout(() => {
    callback(null, usuarios.filter((usuario) => usuario.id === id)[0]);
  }, 200);
}

function getProfesion(id, callback) {
  setTimeout(() => {
    callback(null, profesion[id]);
  }, 200);
}

// getUsuarios((err, usuarios) => console.log(usuarios));

const usuarioBuscado = "Ana";

getUsuarios((err) => {
  const usuarioId = usuarios.filter((u) => u.nombre === usuarioBuscado)[0].id;

  getUsuario(usuarioId, (err, usuario) => {
    const profesionId = usuario.profesion_id;

    getProfesion(profesionId, (err, profesion) => {
      console.log(`La profesion de ${usuarioBuscado} es: ${profesion}`);
    });
  });
});
