/**
 * Created by arpit on 22/7/16.
 */

$(function () {
    showtodo();
    $('#addtodo').click(function () {
        let newtodo={
            id:20,
            task:$('#newtodo').val(),
            done:false
        }
        addtodo(newtodo);

    })
})
function addtodo(newtodo) {
    $.post('/addtodo',newtodo,function (data,status) {
        console.log('status'+status);

        showtodo();
    })

}
function showtodo() {
    $.get('/fetchtodo',function (data,status) {
        $('#todolist').html('');
        for(let todo of data){
            $('#todolist').append('<li id="'+todo.id+'">'
                +todo.task+
                '</li>'
            )       //<li id="12>
        }
    })
}
