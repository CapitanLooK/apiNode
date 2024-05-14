import express from 'express';
import morgan from 'morgan'
import taskRoutes from './routes/tasks.routes';
import usersRoutes from './routes/users.router';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev'))
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.json({ message: 'Test API' })
})

app.use('/api/tasks', taskRoutes);
app.use('/api/users', usersRoutes);

export default app