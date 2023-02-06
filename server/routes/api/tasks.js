
const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');

router.get('/test', (req, res) => res.send('task route testing!'));

router.get('/', (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(404).json({ notasksfound: 'No tasks found' }));
});

router.get('/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(404).json({ notaskfound: 'No Task found' }));
});

router.post('/', (req, res) => {
  Task.create(req.body)
    .then(task => res.json({ msg: 'Task added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Task' }));
});

router.put('/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
    .then(task => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Task.findByIdAndRemove(req.params.id, req.body)
    .then(task => res.json({ mgs: 'Task entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such Task' }));
});

module.exports = router;