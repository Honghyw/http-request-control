const express = require('express');
const morgan = require('morgan');
const app = express();

// Essential variables
const PORT = process.env.PORT || 8080;
const timeLimit = 15*1000; // The interval of time within which a maximum number of request can be sent 
const rateLimit = 5; // The maximum number of requests that can be sent within the time interval
let count = 1; // The number of requests that have been sent so far
let start;  // Start time of the first request
let now;  // Current time

// Configuration of the server
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(function(req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();    
});

// Route to deal with the request sent 
app.get('/button', (req, res, next)=>{
  now = new Date();
  if(count === 1){
    start = new Date();
  } else if(count > rateLimit){
      let timeDiff = now.getTime() - start.getTime();
      if(timeDiff > timeLimit){
        start = new Date();
        count = 1;
      }else{
        let wait = (timeLimit - timeDiff)/1000;
        return res.status(429).send(`Rate limit exceeded. Try again in ${wait} seconds`);
      }
  }
  res.send('The request is successful: '+count);
  count++;
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



