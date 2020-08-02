import express from 'express';
import 'colors';
const app = express();

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`.green.bold);
});