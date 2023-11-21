import Task from "../module/List.js";

export const createTask = async (req, res) => {
    const { title ,user} = req.body;
    console.log(req.body);
    try {
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }
        const newTask = new Task({
            title,
            complete: false,
            user
        })
        await newTask.save();
        return res.status(201).json(newTask);
    } catch (err) {
        console.log(err);
    }
};

export const allUserTasks = async (req, res) => {
    console.log(req.user);
    try {
        const userTasks = await Task.find({user: req.user.id}); 
        return res.json(userTasks);
    } catch (err) {
        console.log(err);
    }
};

export const updateTask = async (req, res) => {
    const taskId = req.params.taskId;
    const { title,complete } = req.body;
    try {
        const updatedTask  = await Task.findByIdAndUpdate(

            taskId,{
            title,
            complete,
        },{new:true});

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        return res.json(updatedTask);
    } catch (err) {
        console.log(err);
    }
};


export const deleteTask = async (req, res) => {
    const taskId = req.params.taskId;
    try {
        await Task.findByIdAndDelete(taskId);
        return res.json("task deleted")
    } catch (err) {
        console.log(err);
    }
};