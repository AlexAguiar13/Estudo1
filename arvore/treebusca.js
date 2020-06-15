const arvore = {}

function insert(tree, value){
    if(tree.value ){
        if(value > tree.value){
            insert(tree.right, value)
        } else {
            insert(tree.left, value)
        }
    } else {
        tree.value = value
        tree.right = {}
        tree.left = {}
    }
}

insert(arvore, '4-lucas')
console.log(arvore)

insert(arvore, '5-breno')
console.log(arvore)

insert(arvore, '3-wyllian')
console.log(arvore)

insert(arvore, '2-caio')
console.log(arvore)
