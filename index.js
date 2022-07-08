let scores = [20, 60, 10, 15, 71, 25, 66, 77]

scores = scores.sort(ascendingSort);

scores.forEach(print);

function ascendingSort(x, y){
    return x -y
}

function print(element){
    console.log(element)
}