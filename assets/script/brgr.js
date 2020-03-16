$(function() {
    $('.classEaten').on('click', function(event) {
      const id = $(this).data('id');
      const newEaten = $(this).data('eaten');
  
      const newEatenState = {
        eaten: newEaten
      };
  
      // Send the PUT request.
      $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: newEatenState
      }).then(
        function() {
          console.log('changed eaten to', newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $('.add-burger').on('submit', function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $('#burger-name').val().trim(),
        eaten: false,
      };
  
      // Send the POST request.
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
      }).then(
        function() {
          console.log('created new burger');
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });