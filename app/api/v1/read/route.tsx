import { client } from "../../server"
export async function GET(request :Request){
    const query = "SELECT table_name FROM information_schema.tables WHERE table_schema=\'public\' AND table_type=\'BASE TABLE\';"
    try{
        const results = await client.query(query)
        return Response.json({
            status : 200,
            results : {
                oid : results.oid,
                command : results.command,
                rowCount : results.rowCount,
                rows : results.rows,
                fields : results.fields
            }
        })
    }catch(err){
        console.log(err)
    }
    return Response.json({
        status : 500,
        message : "Internal Server Error"
    })
}