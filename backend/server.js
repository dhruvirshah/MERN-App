const express = require('express');
const newsRoutes = require('./routes/newsRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/news', newsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
