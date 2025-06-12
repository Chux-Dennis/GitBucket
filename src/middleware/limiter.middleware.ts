import rateLimit from "express-rate-limit";
import { Request, Response, NextFunction } from "express";

// Allow only 20 requests per day
let REQUEST_LIMIT:number = 20
let DELAY_DURATION:number = 24

const limiter = rateLimit({
    windowMs: DELAY_DURATION * 60 * 60 * 1000, 
    max: REQUEST_LIMIT, // Limit each IP to *REQUEST_LIMIT* requests per `windowMs`
    message: {
      success: false,
      message: "Too many requests from this IP, please try again in the next 24-hour span.",
    },
    headers: true, // Include rate limit headers in responses
  });
  
export default limiter  