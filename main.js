 let wh
 let wall_schema = [];
 let  brick_parameters = [];

 function input () {
    let isFileInput = confirm('Do you want to enter data from the file?');
    if(isFileInput){

    } else {
       wh = prompt('Please, enter width and height of your wall');
       console.log(wh);
       if (wh.slice(0,1) > 8 || wh.slice(-1) > 8 || isNaN(wh.slice(0,1)) || isNaN(wh.slice(-1))){
          alert('Please, enter a valid width and height (less than 9)');
          input();
       }
       for (let i = 0 ; i < wh.slice(-1); i++){
          wall_schema[i] = prompt
                   (`Please, enter your layer ${i+1} \n width = ${wh.slice(0,1)} \n height = ${wh.slice(-1)}`);
       }
       for (let i = 0 ; i < wall_schema.length; i++){
          wall_schema[i] = wall_schema[i].split('');
          for ( let j = 0 ; j < wall_schema[i].length; j++) {
            wall_schema[i][j] = +wall_schema[i][j];
         }
       }
       let C = prompt('Please, enter the count of bricks sorts');
       if(isNaN(C)){
          alert('Please, enter a valid number');
          C = prompt('Please, enter the count of bricks sorts');
       }
       for ( let i = 0; i < C ; i++) {
         brick_parameters[i] = prompt(`Please, enter your brick ${i+1} parameters (width height number)`);
         brick_parameters[i] = brick_parameters[i].split(' ')
         for ( let j = 0 ; j < brick_parameters[i].length; j++) {
            brick_parameters[i][j] = +brick_parameters[i][j];
         }
       }
       console.log(wh);
       console.log(wall_schema);
       console.log(brick_parameters);
       

    }
 }
 
 input(); 
 
 //input data ------------------------------------------------------------------------
 /* let wh = '5 2';
 const  wall_schema = [
        [0,0,0,0,0],
        [1,1,1,1,0],
     ];
 let  brick_parameters = [
        [1,1,4],
        [1,4,2],
        [1,3,2],
     ]; */
//--------------------------------------------------------------------------------------



// search num of 1 at the schema ------------------------------------------------------
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
//---------------------------------------------------------------------------------------

// search num of 1 at the all bricks-----------------------------------------------------
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
//---------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------
 function isMore(num1, num2){
    return num1 >= num2;
 }
//-------------------------------------------------------------------------------------

// max width and height of wal schema ---------------------------------------------------------------
function max_w_h (arr) {
   let width = 0;
   let left_border = 0;
   let right_border = 0;

    for (let i = 0; i < arr.length ; i++) {
       let w = max_w(arr[i]);
     
   } 
   width = right_border - left_border;
   return '' + width + ' ' + max_h(arr);

   function max_w(array){
      let tmp = array;
      let arr1 = tmp.toString().replaceAll(',','');
   
      let arr1_rev = tmp.reverse().toString().replaceAll(',','');
   
      if(arr1.indexOf('1') != -1 && arr1.indexOf('1') < left_border) {
         left_border = arr1.indexOf('1');
      }
      if(arr1_rev.indexOf('1') != -1 && array.length - arr1_rev.indexOf('1') > right_border){
         right_border = array.length - arr1_rev.indexOf('1');
      }
   
   } 
}
// --------------------------------------------------------------------------------------------------

// func return width of section (help to search max width) -----------------------------------------

// -------------------------------------------------------------------------------------------------

// func return height of wall (help to search max height) -----------------------------------------
function max_h(array) {
   let h = array.length;
   for (let i = 0 ; i < array.length; i++ ) {
      if (array[i].toString().search(1) != -1){
         break;
      } else if( array[i].toString().search(1) == -1){
         h--;
      }
   }
   for (let i = 0 ; i < array.length; i++ ) {
      if (array[array.length-i-1].toString().search(1) != -1){
         break;
      } else if( array[array.length-i-1].toString().search(1) == -1){
         h--;
      }
   }
   return h;
}
// --------------------------------------------------------------------------------------------

// get shape of bricks -----------------------------------------------------------------------------
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
         if(el==empty) return B[r][c]=undefined; 
         var near=[b(r-1,c), b(r+1,c), b(r,c-1), b(r,c+1)],
            figures=near.filter(function(e,i,a){return e && a.indexOf(e)==i;}),
            char=figures[0] || String.fromCharCode(newCharCode++);
         if(figures.length<2)
            return B[r][c]=char;
         B[r][c]=figures[1];
         concatFigure(r,c,char); 
      });
   });
   return B;
}
// ------------------------------------------------------------------------------------

// check if the item has a neighbor---------------------------------------------------
function isNeighbor (arr) {
   let counter = '';
   let width = '';
   let width2 = '';
   for (let i = 0; i < arr.length; i++) {
      let temp = +/\d+/.exec(arr[i].toString().replaceAll(',',''));
      let temp2 = isOne(temp.toString());
      width = temp.toString().length;
      temp = temp.toString().slice(0,1)
      if(temp == 0 ){
         continue;
      } else if(temp2.search(' ') != -1){
         let num1 = temp2.split(' ')[0];
         let num2 = temp2.split(' ')[1];
         width = num1.length;
         width2 = num2.length;
         if ( i != 0  ) {
            if( num1 == (+/\d+/.exec(arr[i-1].toString())).toString().slice(0,1)){
               width = '';
            }
            if( num2 == (+/\d+/.exec(arr[i-1].toString())).toString().slice(0,1)){
               width2 = '';
            }
         }
         if(i != arr.length - 1){
            if(num1 == (+/\d+/.exec(arr[i+1].toString())).toString().slice(0,1)){
               width = '';
            }
            if(num2 == (+/\d+/.exec(arr[i+1].toString())).toString().slice(0,1)){
               width2 = '';
            }
         }
      } else {
         if ( i != 0  ) {
            if( temp == (+/\d+/.exec(arr[i-1].toString())).toString().slice(0,1)){
               width = '';
            }
         }
         if(i != arr.length - 1){
            if(temp == (+/\d+/.exec(arr[i+1].toString())).toString().slice(0,1)){
               width = '';
            }
         }
      }

      if(width != undefined){
         counter = counter + ' '  + width +' ' + width2;
         
         counter = counter.replaceAll('  ', ' ');
      }
   }

   if(counter.slice(0,1) == ' '){
      counter = counter.slice(1);
   }
   if(counter.slice(-1) == ' '){
      counter = counter.slice(0,-1);
   }
   if(counter == ''){
      return true;
   }
   return counter;

   function isOne(str) {
      let first = str;
      let second = '';
      if(str.slice(-1) != first.slice(0,1)){
         second = str.replaceAll(`${first.slice(0,1)}`,'')
         first = str.replaceAll(`${second}`,'');
      } 
      if(second == ''){
         return first;
      } else  return (first + ' '+ second).toString();
   }
}
//---------------------------------------------------------------------------------------

// check if we have all required bricks --------------------------------------------
function find_bricks(str) {
   if(str === true){
      return true;
   }
   let arr = str.split(' ');
   for (let i = 0; i < arr.length ; i++) {
      if(!verify_brick(arr[i])) {
         return false
      }
   }
   return true;
}
//----------------------------------------------------------------------------------------

// check if we have brick that has the current width -----------------------
function verify_brick (width) {
   let arr_num = -1;
   let temp_temp = width;
   for (let i =  1; i < width || temp_temp ==1 ; i++ ) {
      temp_temp = 2;
      if(isPartWidth(width)) {
         return true;
      } else if(isPartWidth(width-i) ){
         if(isPartWidth(i)){
            return true;
         } 
      } 
   }
   
   function isPartWidth (width2){
      let temp_temp2 = width2;
      for (let z =  1; z < width2 || temp_temp2 == 1 ; z++ ) {
         temp_temp2 =2;
         if(isSameWidth(width2)) {
            return true;
         } else if(isSameWidth(width2-z) ){
            let temp_arr_num = arr_num;
            if(isSameWidth(z)){
               return true;
            } else {
               brick_parameters[temp_arr_num][2]++;
               
            }
         } 
      }
   }

   function isSameWidth (width1) {
      for (let j = 0; j < brick_parameters.length; j++) {
         if ( brick_parameters[j][1] == 1 && brick_parameters[j][2] > 0){
            if (brick_parameters[j][0] == width1) {
               brick_parameters[j][2]--;
               arr_num = j;
               return true;
            }
         } else if(brick_parameters[j][0] == 1 && brick_parameters[j][2] > 0) {
            if (brick_parameters[j][1] == width1) {
               brick_parameters[j][2]--;
               arr_num = j;
               return true;
            }
         }
      }
      return false;
   }
   return false;
}
//--------------------------------------------------------------------

//----verifies-----verifies-------verifies-------verifies--------verifies-------verifies-------
function all_verifications () {
   if(!find_bricks(isNeighbor(getShapes(wall_schema)))){
      return false;
   }
   if (!isMore(bricks_cell_num(brick_parameters),schema_cell_num(wall_schema))) {
      return false;
     }
   if (wh != max_w_h(wall_schema)){
      return false;
   }


   return true;
}

console.log(all_verifications());








