$(document).ready(function() { 
    
    $('form button').click(function(){
        
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
    const novaTarefa = $('#endreco-tarefa').val();
    const novoItem = $('<li></li>');
    $(`div  src="${novaTarefa}>`).appendTo(novoItem)

    })

})