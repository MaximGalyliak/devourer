const orm = require('../config/orm');

module.exports = {

   showItems: function (){
      return orm.selectAll('thing_tb')
   },

   addItem: function (item_name) {
      return orm.insertRow('thing_tb', ['name', 'devoured'], [item_name, false]);
   },

   devourItem: function (id){
      return orm.updateById('thing_tb', 'devoured', true, id);
   }
};