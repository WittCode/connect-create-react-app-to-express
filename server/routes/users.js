const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.json(
        [
            {
                username: 'WittCode',
                age: 26
            },
            {
                username: 'Mike',
                age: 32
            }
        ]
    )  
});

module.exports = router;