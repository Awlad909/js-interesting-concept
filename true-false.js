/* 
falsy:
false
0
empty string
undefined
null
NaN

----------
truthy:
true
any number (positive or negative)
any string including single whitespace, '0', 'false'
[]
{}
anything else that is the truthy
*/

const x = ' ';
if(x){
    console.log('variable is truthy')
}
else{
    console.log('variable is falsy')
}