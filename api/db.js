import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"blog"
})

db.connect((error) => {
    if (error) {
      console.error('Erro ao conectar com o banco de dados: ' + error.stack);
      return;
    }
    console.log('Conexão estabelecida com sucesso.');
  });