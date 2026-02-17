module.exports=(temp,product)=>{
    let output=temp.replace(/{{PRODUCTNAME}}/g,product.productName);
    output=output.replace(/{{IMAGE}}/g,product.image);
    output=output.replace(/{{PRICE}}/g,product.price);
    output=output.replace(/{{FROM}}/g,product.from);
    output=output.replace(/{{FEATURES}}/g,product.feature);  
   output=output.replace(/{{QUANTITY}}/g,product.quantity);
   output=output.replace(/{{DESCRIPTION}}/g,product.description);
   output=output.replace(/{{ID}}/g,product.id);
if(!product.subscription){
output=output.replace(/{{NOT_SUBSCRIPTION}}/g, 'not-subcription');
}else{
    output=output.replace(/{{NOT_SUBSCRIPTION}}/g, '');
}
return output;
}