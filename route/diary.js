const express=require('express')
const router=express.Router();
const diaryCtrl=require('../API/DiaryController');
const auth=require('../middleware/auth');

router.post('/',auth,diaryCtrl.post1);
router.get('/',auth,diaryCtrl.get1);
router.get('/:id',auth,diaryCtrl.getone);
router.delete('/:id',auth,diaryCtrl.delete);
router.patch('/:id',auth,diaryCtrl.update);

module.exports=router;