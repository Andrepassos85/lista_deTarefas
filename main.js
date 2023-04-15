$(document).ready(function() {
    // Adiciona tarefa na lista
    $('#adiciona-tarefa').submit(function(event) {
      event.preventDefault();
      var tarefa = $('#endereco-tarefa').val();
      if (tarefa !== '') {
        var novaTarefa = $('<li>' + tarefa + '</li>');
        $('#lista-tarefas').append(novaTarefa);
        $('#endereco-tarefa').val('');
      }
    });
  
    // Riscar tarefa ao clicar
    $('#lista-tarefas').on('click', 'li', function() {
      $(this).css('text-decoration', 'line-through');
    });
  });
  