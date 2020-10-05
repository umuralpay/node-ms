const express = require('express');
const health = require("@cloudnative/health-connect");
const app = express();
const port  = process.env.PORT || 3000;

const healthCheck = new health.HealthChecker();
const pingCheck = new health.PingCheck("example.com");
healthCheck.registerLivenessCheck(pingCheck);
healthCheck.registerReadinessCheck(pingCheck);
app.use('/live', health.LivenessEndpoint(healthCheck));
app.use('/ready', health.ReadinessEndpoint(healthCheck));
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});
