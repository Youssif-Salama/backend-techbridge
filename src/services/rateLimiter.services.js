import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
  message:{
      message:"Too many requests from this IP, please try again after 15 minutes"
  }
})


export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message:{
      message:"Too many requests from this IP, please try again after 15 minutes"
  }
})

export default limiter;