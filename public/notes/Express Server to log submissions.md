- [[setting up a Node project]]
- I need to do a few things, I need to modify my component 

    fetch('http://localhost:3000/log-input', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
`     body: JSON.stringify({ input: inputValue }),
 ``   })
  ``    .then(response => response.text())
   ``   .then(message => {
    `    console.log(message); // Log the response message from the `server
   ``     setInputsList([...inputsList, inputValue]);
    ``    setInputValue('');
     `` })
     `` .catch(error => console.error('Error logging input:', error));
   `` };
`app.post('/log-input', (req, res) => {
``  console.log('User submitted:', req.body.input);
``  res.status(200).send('Input logged');
`});`
`app.listen(port, () => {
``  console.log(`Server listening at http://localhost:${port}`);
`});
- Initialises a POST Request, sends a POST request to the `./log-input` endpoint on the server
- Sets Request headers, to tell the server the body of the request is in the JSON format
- sends the request body
- Processes the server's response 
- handles the response data 
- - The URL `'http://localhost:3000/log-input'` should match the server’s listening endpoint. If the Express server is actually on port `5000`, the URL in the fetch call should be `'http://localhost:5000/log-input'` to match the server.