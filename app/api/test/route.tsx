import { client } from "../server"

export async function GET(request: Request, response: Response) {
    try {
        const results = await client.("SELECT * FROM subscribers;")
        return Response.json({
            status: response.status,
            results: {
                oid: results.oid, //? I dont know what this is .
                command: results.command,
                rowCount: results.rowCount,
                rows: results.rows,
                fields: results.fields, // columns
            }
        })
    } catch (err) {
        console.log(err)
    }
    return Response.json({
        status: response.status
    })
}

export async function POST(request: Request) {
    return Response.json({
        status: 200,
        message: "Post request recievied"
    })
}