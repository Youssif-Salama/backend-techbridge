const filterFeatureMiddleware=(key,value)=>(req,res,next)=>{
  req.dbQuery=req.dbQuery.where({[key]:req.params[value]});
  next();
}

export const filterQueryUponRelationByIdMiddleware=(key,skip)=>(req,res,next)=>{
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

  if (!req.dbQuery) {
    req.dbQuery = req.model.find();
  }

  const searchConditions = keys.map((key) => ({
    [key]: { $regex: searchWord }
  }));

  req.dbQuery = req.dbQuery.where({ $or: searchConditions });

  next();
};

const lowSearchMiddleware = (filterKeys = [],forWhat) => (req, res, next) => {
  if(!req.query.word) return next();
  console.log(req.query);

  const { word = "", skipAddons } = req.query;
  const searchWord = new RegExp(word.trim(), "i");

  // Initialize dbQuery if not already initialized
  if (!req.dbQuery) req.dbQuery = req.model.find();

  // Default fields to search via regex
  let regexSearchFields = ["title", "description"];
  if(forWhat=="company"){
    regexSearchFields=["Title","Description","Email"]
  }
  if(forWhat=="company"){
    regexSearchFields=["title", "description","hashtags"]
  }
  const searchConditions = regexSearchFields.map((key) => ({
    [key]: { $regex: searchWord }
  }));

  req.dbQuery = req.dbQuery.where({ $or: searchConditions });

  // Handle additional filters only if skipAddons is NOT true
  if (!["true", "1", true].includes(skipAddons)) {
    const filters = {};

    filterKeys.forEach((key) => {
      // Convert to number if value is numeric (like experience)
      let value = req.query[key];

      if (key === "experience" && value !== undefined) {
        filters[key] = Number(value);
      } else if (key === "salary" && req.query.salary) {
        const { from, to } = req.query.salary;
        if (from !== undefined) filters["salary.from"] = Number(from);
        if (to !== undefined) filters["salary.to"] = Number(to);
      } else if (value !== undefined) {
        filters[key] = value;
      }
    });

    // Apply extra filters
    if (Object.keys(filters).length > 0) {
      req.dbQuery = req.dbQuery.where(filters);
    }
  }

  next();
};


const populateMiddleware=(key)=>(req,res,next)=>{
  req.dbQuery=req.dbQuery.populate(key);
  next();
}

const selectorMiddleware=(keys)=>(req,res,next)=>{
  req.dbQuery=req.dbQuery.select(keys);
  next();
}

export {
  filterFeatureMiddleware,
  sortingFeatureMiddlware,
  paginationFeatureMiddleware,
  searchMiddleware,
  lowSearchMiddleware,
  populateMiddleware,
  selectorMiddleware
}