import connectDB from "./db/connection.db.js";
import v1Router from "./routers/v1.routers.js"
import cors from "cors"

function Bootstartp(app){
  app.use(cors());
  app.use("/api/v1/",v1Router)
  const Port=process.env.PORT || 3000;

  app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).json({message:err.message});
  })
  connectDB().then((res)=>{
    res && console.log("database connected")
    app.listen(Port,()=>{
      console.log(`server is running on port ${Port}`)
    })
  }).catch(error=>console.error(error));
}

export default Bootstartp
