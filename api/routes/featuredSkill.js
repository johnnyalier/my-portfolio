const router = require("express").Router();
const {
    createFeaturedSkill,
    updateFeaturedSkill,
    deleteFeaturedSkill,
    getFeaturedSkills,
} = require('../controllers/featuredSkill')

router.post('/', createFeaturedSkill)
router.put('/:id', updateFeaturedSkill)
router.delete('/:id', deleteFeaturedSkill)
router.get('/', getFeaturedSkills)

module.exports = router;