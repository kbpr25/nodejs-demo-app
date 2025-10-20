const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from Node.js Demo App!',
    version: '1.0.0',
    status: 'running'
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// About route
app.get('/about', (req, res) => {
  res.json({ 
    app: 'nodejs-demo-app',
    description: 'CI/CD Pipeline Demo with GitHub Actions',
    author: 'Bharath Prakash Reddy'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
