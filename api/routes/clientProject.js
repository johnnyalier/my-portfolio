const router = require("express").Router();
const {
    createClientProject,
    updateClientProject,
    deleteClientProject,
    getAllClientProjects,
    getClientProject,
} = require('../controllers/clientProject')

router.post('/', createClientProject)
router.put('/:id', updateClientProject)
router.delete('/:id', deleteClientProject)
router.get('/', getAllClientProjects)
router.get('/:id', getClientProject)

module.exports = router;