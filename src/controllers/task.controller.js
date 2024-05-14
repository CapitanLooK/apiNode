import Task from '../models/Task'

export const findAllTasks = async (req, res) => {
    const task = await Task.find()
    res.json(task)
}

export const createTask = async (req, res) => {
    const newTask = new Task({ 
        title: req.body.title,
        description: req.body.description,
        done: req.body.done ? req.body.done : false
    
    })
    const taskSaved = await newTask.save()
    res.json(taskSaved)
}

export const findOneTask = async (req, res) => {

    const findedTask = await Task.findById(req.params.id);
    res.json(findedTask)
}

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Task has been delete sucessfully'
    })
}

export const findAllDoneTasks = async (req, res)=>{
    const findedTasks = await Task.find({done: true})
    res.json(findedTasks)
}

export const updateTask = async (req, res) =>{
   const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body)
   res.json({message: 'Task has been updated sucessfully'})
}