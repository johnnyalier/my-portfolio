const router = require('express').Router();
const {
    createSkill,
    updateSkill,
    deleteSkill,
    getSkills,
} = require('../controllers/skill');

router.post('/', createSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);
router.get('/', getSkills);

module.exports = router;