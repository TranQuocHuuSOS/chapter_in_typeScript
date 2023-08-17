let products=[
    {name:'phone', price: 300},
    {name:'tablet',price: 5000},
    {name:'computer',price: 93943}
];
for (let i = 0; i <products.length; i++){
    if(products[i].price==5000){
        break;
    }
    console.log(products[i]);
}