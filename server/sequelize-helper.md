## Create Model & Migration Files

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

## Running Migrations

### Up

npx sequelize-cli db:migrate
