The files that I wrote include main.js, index.html (which are under public folder) and app.js. The backend, app.js is written using the express framework. 

To run the server, simply use node app.js command. After this, to open the website, simply go to http://localhost:8080. Once in the website, there will be a button and some text under it. Initially, the text will be "No response received to display". After first time hit the button, the text will turn to "The request is successful: 1". Next time it was hit, the text will be "The request is successful: 2" and so on. Every time the button is pressed, a get http request is sent to the backend sever. Once the number of the requests sent reaches the limits within the time, the text will be "Rate limit exceeded. Try again in # seconds".

Note that in order to see everything is working fine, the time limits is set to 15 seconds and the rate limit is set to 5. The status code can be seen in the terminal where the server is run. 

