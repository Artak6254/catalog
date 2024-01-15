const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const personData = require("./data.json");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3001; // Use a single port number

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.get('/header', (req, res) => {
    res.json(personData.header);
});

app.get('/catalog', (req, res) => {
    res.json(personData.catalog);
});

app.get('./buttons', ((req, res) => {
    res.json(personData.catalog);
}));
app.put('/updateBtn/:id', (req, res) => {
    try {
      const itemId = req.params.id;
      const newData = req.body;
  
      // Trim leading/trailing spaces from title
      newData.button = newData.button.trim();
  
      const updatedItemIndex = buttonsData.findIndex(item => item.id === parseInt(itemId));
  
      if (updatedItemIndex !== -1) {
        buttonsData[updatedItemIndex] = newData;
        res.json({ message: 'Data updated successfully' });
      } else {
        res.status(404).json({ error: 'Button not found' });
      }
    } catch (error) {
      console.error('Error processing PUT request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
// PUT request route
app.put('/update/:id', (req, res) => {
    try {
        const itemId = req.params.id;
        const newData = req.body;

        console.log('Raw Request Body:', req.body);

        // Trim leading/trailing spaces from title
        newData.title = newData.title.trim();

        const updatedItemIndex = personData.catalog.findIndex(item => item.id === parseInt(itemId));

        if (updatedItemIndex !== -1) {
            personData.catalog[updatedItemIndex] = newData;
            res.json({ message: 'Data updated successfully' });
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (error) {
        console.error('Error processing PUT request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/addCatalog', (req, res) => {
    try {
      // Extract data from the request body
      const newItem = req.body;
  
      // Generate a new unique ID (replace this logic with a more robust solution in production)
      const newId = personData.catalog.length + 1;
  
      newItem.id = newId;
  
      // Trim leading/trailing spaces from title
      newItem.title = newItem.title.trim();
  
      // Add the new item to the catalog
      personData.catalog.push(newItem);
  
      res.json({ message: 'Data added successfully', newItem });
    } catch (error) {
      console.error('Error processing POST request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.delete('/delete/:id', (req, res) => {
    try {
        const itemId = req.params.id;

        const deletedItemIndex = personData.catalog.findIndex(item => item.id === parseInt(itemId));

        if (deletedItemIndex !== -1) {
            personData.catalog.splice(deletedItemIndex, 1);
            res.json({ message: 'Data deleted successfully' });
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (error) {
        console.error('Error processing DELETE request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
