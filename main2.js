/*
1.(потім) реалізація інпуту
1 перевірити чи збігається  загальна кількість введених цеглин з тими шо на стіні
2.1 розділити кожен слой на цеглини 
2.2 перевірити чи є в наявності іменно такі вузькі як треба там на тих слоях
3. 

пробую знімати сперш горизонтальні шари і дивитись чи є підходящі для того фігури 
 */

 //input data
 let wh = '6 3',
     wall_schema = [
        [1,0,1,1,0,1],
        [1,1,1,1,1,1],
        [1,1,1,1,1,1]
     ],
     brick_parameters = [
        [1,1,4],
        [2,1,6],
        [1,3,1],
        [3,4,5]
     ];



// search num of 1 at the schema
 function schema_cell_num(schema) {
    let num = 0;
    for (let i = 0 ; i < schema.length; i++) {
       for (let j = 0; j < schema[0].length; j++) {
          if (schema[i][j] == 1) {
             num++;
          }
       }
    }
    return num;
 }


// search num of 1 at the all bricks
 function bricks_cell_num (bricks) {
    let num = 0;
    let temp_num = 1;

    for(let i = 0; i < bricks.length; i++) {
       temp_num = 1;
       for (let j = 0; j < 3 ; j++){
          temp_num = temp_num * bricks[i][j];
       }
       num = num + temp_num
    }
    return num;
 }


// verify is a num of 1 at schema >  num of 1 at the all bricks
 function isMore(num1, num2){
    return num1 > num2;
 }
 console.log(isMore(bricks_cell_num(brick_parameters),schema_cell_num(wall_schema)))
 ///// з цим можна вже робити одну іфку


 // найти окремі блоки і подивитись чи є вони в предложених  


 function getShapes(A){
   var B=[],empty=0,newCharCode=49;
   function b(i,j){return B[i]&&B[i][j];}
   function concatFigure(i,j,to){
      var bij=b(i,j);
      if(!bij||bij==to)return;
      B[i][j]=to;
      concatFigure(i-1,j,to); concatFigure(i,j-1,to);
      concatFigure(i+1,j,to); concatFigure(i,j+1,to);
   }
   A.forEach(function(row,r){
      B.push([]);
      row.forEach(function(el,c){
         if(el==empty) return B[r][c]=undefined; //нет фигуры
         var near=[b(r-1,c), b(r+1,c), b(r,c-1), b(r,c+1)],
            figures=near.filter(function(e,i,a){return e && a.indexOf(e)==i;}),
            char=figures[0] || String.fromCharCode(newCharCode++);
         if(figures.length<2)//если рядом 1 или 0 фигур - все просто
            return B[r][c]=char;
         B[r][c]=figures[1];//а если их много - переделаем в одну
         concatFigure(r,c,char); 
      });
   });
   return B;
}
//Вывод
var A=[
   [1,0,1,1,1,0,1],
   [1,1,1,0,0,1,1],
   [0,0,1,1,1,0,0],
   [1,1,1,1,1,1,1],
],
    B=getShapes(A);
console.log(A.map(r=>r.join('')).join('\n'));
console.log(B.map(r=>r.map(e=>e?e:' ').join('')).join('\n'));






