import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"blog"
})

db.connect(function(err) {
    if (err) {
      console.error("Erro ao conectar ao banco de dados: ", err);
    } else {
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    }
  });