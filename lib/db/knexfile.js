// No momento só precisamos de um env configurado para o banco de dados
exports[process.env.NODE_ENV] = {
  client: 'mysql2',
  connection: process.env.DATABASE_URL
}
