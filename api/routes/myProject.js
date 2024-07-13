const router = require("express").Router();
const {
    createProject,
    updateProject,
    deleteProject,
    getAllProjects,
} = require('../controllers/myProject')

router.post('/', createProject)

router.put('/:id', updateProject)

router.delete('/:id', deleteProject)

router.get('/', getAllProjects)

module.exports = router;