const express = require('express')
const router = express.Router()
const insertUtil = require('../controller/insert_ctl')

router.post('/add_locker',
    // validateUtil.validate_token(),
    // validateUtil.validate_get_customer(),
    insertUtil.add_locker(),
    function (req, res) {
        res.status(200).json({
            'success': true,
            message: "เพิ่มข้อมูลสำเร็จ",
            result: req.result
        })
    }
)

module.exports = router;