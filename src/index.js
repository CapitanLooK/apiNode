import app from './app';
import './database';

//start server
app.listen(3000, ()=>{
    console.log(`Server on port ${app.get('port')}`);
});