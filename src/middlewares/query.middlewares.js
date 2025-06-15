const getQueryMiddleware=(model)=>(req,res,next)=>{
  req.dbQuery=model.find();
  next()
}


const updateQueryMiddleware = (model) => (req, res, next) => {
  req.dbQuery = model.updateMany({}, req.body);
  next();
};


const deleteQueryMiddleware=(model)=>(req,res,next)=>{
  req.dbQuery=model.deleteMany();
  next()
}

const
postQueryMiddleware=(model)=>(req,res,next)=>{
  req.dbQuery=model.create(req.body);
  next()
}

export {getQueryMiddleware,updateQueryMiddleware,deleteQueryMiddleware,postQueryMiddleware};