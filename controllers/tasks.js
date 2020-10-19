
const Task = require("../models/task.model");

/** GET */
const getAll = async (request, response) => {
    const tasks = await Task.find({}).populate("tasks", {
        name: 1,
        state: 1,
        author: 1,
        createdAt: 1,
        modifiedAt: 1,
    });
    response.status(200).json(tasks);
};

/** POST */
const addTask = async (request, response) => {
    try {
        const body = request.body;

        const tasks = new Task({
            name: body.name,
            state: body.state,
            author: body.author,
            createdAt: new Date(),
            modifiedAt: new Date(),
        });

        const savedTask = await tasks.save();

        response.json(savedTask);
    } catch (error) {
        next(error);
    }
};

/** GET:ID */
const getTask = async (request, response) => {
    const task = await Task.findById(request.params.id);
    if (task) {
        response.json(task);
    } else {
        response.status(404).end();
    }
};

/** PUT */
const updateTask = async (request, response, next) => {
    const body = request.body;
    const task = {
        name: body.name,
        state: body.state,
        author: body.author,
        modifiedAt: new Date(),
    };
    const updatedTask = await Task.findByIdAndUpdate(request.params.id, task, {
        new: true,
    });
    response.json(updatedTask);
};

/** DELETE */
const deleteTask = async (request, response) => {
    const task = await Task.findById(request.params.id);
    await task.deleteOne();
    return response.status(204).end();
};

module.exports = { getAll, getTask, addTask, updateTask, deleteTask };
