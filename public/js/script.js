$(document).ready(()=>{

   $("#add-item-btn").on("click", function(e){
      e.preventDefault();
      let itemName = $("#add-item-tx").val().trim();
       $.ajax({
           type: 'POST',
           url: `/${itemName}`
       }).done((data)=>{
           console.log(data);
           location.reload();
       });
   });

   $(".devour-btn").on("click", function (e){
      e.preventDefault();
      let itemId = $(this).attr("id");
      $.ajax({
         type: 'PUT',
         url: `/update/${itemId}`
      }).done((data)=>{
         console.log(data);
         location.reload();
      });
   });

});