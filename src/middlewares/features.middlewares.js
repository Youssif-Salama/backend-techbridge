const filterFeatureMiddleware=(key,value)=>(req,res,next)=>{
  req.dbQuery=req.dbQuery.where({[key]:req.params[value]});
  next();
}

export const filterQueryUponRelationByIdMiddleware=(key)=>(req,res,next)=>{
  if(!req.params.id) {
  req.dbQuery=req.dbQuery.where({[key]:req.user?.id});
  }
  else req.dbQuery=req.dbQuery.where({[key]:req.params.id});
  next();
}

const sortingFeatureMiddlware=(key,value)=>(req,res,next)=>{
  const sortKey=req.query.sortKey || key;
  const sortValue=req.query.sortValue || value;
  req.dbQuery=req.dbQuery.sort({[sortKey]:sortValue});
  next();
}

const paginationFeatureMiddleware = (l = 20, o = 0) => async (req, res, next) => {
  const limit = parseInt(req.query.limit) || l;
  const offset = parseInt(req.query.offset) || o;

  try {
    const countQuery = req.dbQuery.model.find(req.dbQuery.getQuery());
    const modelDataLength = await countQuery.countDocuments();

    req.dbQuery = req.dbQuery.skip(offset).limit(limit);

    const meta = {
      hasNext: offset + limit < modelDataLength,
      hasPrev: offset > 0,
      total: modelDataLength,
      limit,
      offset,
      pages: Math.ceil(modelDataLength / limit),
      page: Math.floor(offset / limit) + 1
    };

    res.meta = meta;
    next();
  } catch (error) {
    next(error);
  }
};

const searchMiddleware = (keys) => (req, res, next) => {
  const { search } = req.query;
  if (!search) return next();

  const searchWord = new RegExp(search.trim(), "i");

  req.dbQuery = req.dbQuery || {};

  req.dbQuery.$or = keys.map((key) => ({
    [key]: { $regex: searchWord }
  }));

  next();
};

const lowSearchMiddleware=(keys)=>(req,res,next)=>{
  const query=req.query;
  if(Array.from(Object.keys(query)).length===0) return next();
  const searchWordsObj={};
  for(const key in keys){
    if(query[key]){
      searchWordsObj[key]=query[key];
    }
  }
  req.dbQuery=req.dbQuery.where(searchWordsObj);
  next();
}



export {
  filterFeatureMiddleware,
  sortingFeatureMiddlware,
  paginationFeatureMiddleware,
  searchMiddleware,
  lowSearchMiddleware
}