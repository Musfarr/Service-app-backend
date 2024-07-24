const express = require('express')
const {GetTest , PostTest ,PutTest , DeleteTest } = require("../controllers/testcontrollers");


const router = express.Router()


//  This is Cleaner  way  
router.route('/').get(GetTest).post(PostTest);
router.route('/:id').put(PutTest).delete(DeleteTest);


// this is same as above 
// router.get('/' , (GetTest ) )
// router.get('/' , (PostTest ) )
// router.get('/' , (PutTest ) )
// router.get('/' , (DeleteTest ) )



module.exports = router