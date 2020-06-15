let arvore = {
    left: {
        left: undefined,
        right: {
            value: '2-breno'
        },
        value: '1-wyllian'
    },
    right: {
        left: {
            value: '4-jose'
        },
        right: undefined,
        value: '5-caio',
    },
    value: '3-lucas'
}

function preOrder(tree){
    console.log(tree.value)
    tree.left && preOrder(tree.left)
    tree.right && preOrder(tree.right)
}

function inOrder(tree){
    tree.left && inOrder(tree.left)
    console.log(tree.value)
    tree.right && inOrder(tree.right)
}

function posOrder(tree){
    tree.left && posOrder(tree.left)
    tree.right && posOrder(tree.right)
    console.log(tree.value)
}

console.log('arvore em pre ordem')
preOrder(arvore)

console.log('arvore em ordem')
inOrder(arvore)

console.log('arvore em pos ordem')
posOrder(arvore)
