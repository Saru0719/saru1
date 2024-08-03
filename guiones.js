const num = 13

for(var i=1;i<=num;i++){
    var espacio = " "
    for(var j=1;j<=i;j++){
        espacio = espacio + "*"
    }
    console.log(espacio)
}
for(var i = num-1;i>=1;i--){
    var espacioo = " "
    for(var j=i;j>=1;j--){
        espacioo = espacioo + "*"
    }
    console.log(espacioo)
}