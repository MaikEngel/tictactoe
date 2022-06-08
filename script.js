let fields = [];

let currentShape = 'red'

function fillShape(id) {
if (currentShape == 'red') {
    currentShape = 'green'
}else{
    currentShape = 'red'
}

    fields[id] = currentShape 
    console.log(fields)
}