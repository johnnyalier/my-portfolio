const router = require("express").Router();
const {
    createJob,
    updateJob,
    deleteJob,
    getJobs,
    getJob,
} = require('../controllers/myJob')

router.post('/', createJob)
router.put('/:id', updateJob)
router.delete('/:id', deleteJob)
router.get('/', getJobs)
router.get('/:id', getJob)

module.exports = router;
