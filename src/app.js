const yargs = require("yargs")

const { connection, client } = require("./db/connection")
const { addMovie, listMovie, listMovies } = require("./utils")

const app = async (yargsObj) => {
    const collection = await connection()
    if (yargsObj.add) {
        await addMovie(collection, { title: yargsObj.title, actors: yargsObj.actors , year: yargsObj.year })
        console.log("sucessfully added new document to db")
    } else if (yargsObj.list) {
        await listMovies(collection)
    } else {
        console.log("incorrect Command")
    }
    await client.close()
}

app(yargs.argv)


//LO : do the full complete CRUD operation
//so far done CR
//need to do UD (update and Delete - use mongo db docs)