const express = require('express');
const router = express.Router();
const client = require('prom-client');

// Create a Registry which registers the metrics
const register = new client.Registry();

// Add a default metrics collection
client.collectDefaultMetrics({ register });

// Create a custom counter metric
const requestCounter = new client.Counter({
  name: 'node_request_operations_total',
  help: 'The total number of processed requests'
});

// Register the custom metric
register.registerMetric(requestCounter);

// Define a route to expose the metrics
router.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Middleware to increment the counter for each request
router.use((req, res, next) => {
  requestCounter.inc();
  next();
});

module.exports = router;