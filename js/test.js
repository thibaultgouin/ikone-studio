$(document).ready(function() {

  var data = new Firebase('https://ykone.firebaseio.com/');
  $('#toggleInput').on('click', function() {

    var tState = $('.inputFields').hasClass('toggled');
    console.log(tState);
    if (tState == false) {
      $('.inputFields').slideDown().addClass('toggled');
      $(this).hide();

    } 

  });

  $('#toDo').keypress(function(e) {
    if (e.keyCode == 13) {
      var toDo = $('#toDo').val();
      var s = $('#s').val();
      console.log(toDo);
      data.push({
        todo: toDo,
        status: s
      });
    }

  });

  $('#list').on('click', '.delete', function() {
    console.log('qerewrew');
    var dataKey = $(this).data("key");
    console.log(dataKey);
    var dataUpdate = new Firebase('https://ykone.firebaseio.com/' + dataKey);

    dataUpdate.remove();
   
    $(this).closest('#containList').fadeOut(function(){
      $(this).remove();
    });
    taskCount();
  });

  data.on('child_added', function(snapshot) {
    console.log(snapshot);
    var toDo = snapshot.val();
    var key = snapshot.key();

    toDoList(toDo.todo, toDo.status, key);
    taskCount();
  });

  data.on('child_removed', function(oldChildSnapshot) {
    console.log('removed key' + oldChildSnapshot.key());
  });

  function toDoList(todo, status, key) {
    $('<div id="containList"><div class="eight columns listItem">' + todo + '</div><div class="two columns status">' + status + '</div>' +
      ' <div class="two columns delete" data-key=' + key + '>Delete</div></div>').hide().prependTo($('#list')).fadeIn('slow');
    console.log(key);
    $('#toDo').val('');
    $('.inputFields').slideUp('slow',function(){
      $(this).removeClass('toggled');
      $('#toggleInput').show();
      
    });
  };

  function update(key) {
    var dataUpdate = new Firebase('https://jwvtodo.firebaseio.com/' + key);
    dataUpdate.update({
      todo: 'updated',
      status: 'changed'
    });

  };
  
  function taskCount(){
    var taskAmount = $('.listItem').length;
    $('.taskCount').html(taskAmount);
  }
  
});