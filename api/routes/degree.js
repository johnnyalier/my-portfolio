const router = require("express").Router();
const {
    createDegree,
    updateDegree,
    deleteDegree,
    getAllDegrees,
} = require('../controllers/degree')

router.post('/', createDegree)
router.put('/:id', updateDegree)
router.delete('/:id', deleteDegree)
router.get('/', getAllDegrees)

module.exports = router;
