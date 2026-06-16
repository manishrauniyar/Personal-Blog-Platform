import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import stackRouter from './routes/stackRoutes.js';
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = express();

await connectDB();

// Middleware

app.use(cors());
app.use(express.json());


// Routes

app.get('/', (req, res) => res.send('API is working!'));
app.use('/api/admin', adminRouter);
app.use('/api/stack', stackRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


export default app;
