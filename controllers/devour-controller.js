const Express = require('express');
const router = Express.Router();
const devour = require('../models/devour');
//display
router.get('/', (req, res) => {
   devour.showItems().then(items => {
      res.render("index", { allitems: items });
   });
});
//insert
router.post('/:item_name', (req, res) => {
   devour.addItem(req.params.item_name)
      .then(resp => {
         res.json({ id: resp.insertId });
      });
});
//update
router.put('/update/:id', (req, res) => {
   devour.devourItem(req.params.id)
      .then(resp => {
         res.json({ id: resp.changedRows });
      });
});

module.exports = router;