$(document).ready(function(){

    $('form').on('submit', function(e){
        let recebeTarefa = $('#registra-tarefa').val();
        let novaTarefa = (`<li class="adiciona-tarefa"> -> ${recebeTarefa}</li>`);

        e.preventDefault();
        $(novaTarefa).appendTo('ul');
        $('#registra-tarefa').val('');

        $('.adiciona-tarefa').click(function(){
            let novaTarefa = (`<li class="adiciona-tarefa" style="text-decoration:line-through"> -> ${recebeTarefa}</li>`);
            $(this).replaceWith(novaTarefa);
        })
    })
})