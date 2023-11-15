import { Client } from "pg";

// defining the postgres sql user/client
const client = new Client({
    user: process.env.PGSQL_USER,
    database: process.env.PGSQL_DATABASE,
    password: process.env.PGSQL_PASSWORD,
    port: Number(process.env.PGSQL_PORT), // This is supposed to be a number
});

// connecting to the postgres sql database
client.connect().then(() => {
    console.log("Connected to postgresql database");
}).catch((err) => {
    console.log("Error connecting to postgresql database");
    console.log(err);
});

export { client };