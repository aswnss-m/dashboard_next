export async function POST(request : Request){
    if(request.method == "POST"){
        return Response.json({
            status : 200,
            message : "Connection Successfull"
        })
    }else{
        return Response.json({
            status: 405,
            message : "Method Not Allowed"
        })
    }
}