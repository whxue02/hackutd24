const express = require('express');
const sambaRoutes = require('./samba'); // Assuming samba.js is in the same folder

const app = express();
app.use(express.json());
app.use('/api', sambaRoutes); // Mount Samba routes under /api

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
