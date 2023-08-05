1.Print odd numbers in an array:

let array=[1,2,3,4,5,6,7,8,9,10];       
let odd_number=function(array){           
   for(let i=0;i<array.length;i++)
   {
       if(array[i] % 2 !=0)         
       {
            console.log(array[i]);
       }
   }
}
odd_number(array);                  


2.Convert all the strings to title caps in a string array:


    

    let  array=["ari","ram","sam"];
    let arr_capital=function(array){          
        for(var i=0;i<array.length;i++)     
        {
            array[i]=array[i].charAt(0).toUpperCase() + array[i].slice(1);
           
        }
        let array_2=array.join(" ");
        console.log(array_2);
    }
    arr_capital(array);                 
   

    3. Sum of all numbers in an array:

    let array=[10,20,30,40,50];         
      var sum=0;
   let sum_array=function(array){             
     
       for(let i=0;i<array.length;i++)
       {
           
           sum=sum+array[i];            
           
       }
       console.log(sum);
   }
   sum_array(array);                    

  

   4.Return all the palindromes in an array:

   var array=["nayan","mam"];                 
    var array_01=array[0];
    let array_02=array[1];
    var arr_split_01=array_01.split("");        
    var arr_reversed=arr_split_01.reverse();  
    let arr_split_02=array_02.split("");
    let arr_reversed_02=arr_split_02.reverse();
    var arr_polidrom=function(arr_reversed,arr_reversed_02){  
        console.log(`${arr_reversed.join("")}  ${ arr_reversed_02.join("")}`); 
    }
    
    
    
    arr_polidrom(arr_reversed,arr_reversed_02);     

   



2. Using the Arrow Function:

1.Print the odd Number an Array:

let array=[1,2,3,4,5,6,7,8,9,10];       
    let odd_number=(array)=>{           
       for(let i=0;i<array.length;i++)
       {
           if(array[i] % 2 !=0)         
           {
                console.log(array[i]);
           }
       }
    }
    odd_number(array);                  

    


    2.Convert all the strings to title caps in a string array:


   
    let  array=["ari","ram","sam"];
    let arr_capital=(array)=>{          
        for(var i=0;i<array.length;i++) 
        {
            array[i]=array[i].charAt(0).toUpperCase() + array[i].slice(1);
           
        }
        let array_2=array.join(" ");
        console.log(array_2);
    }
    arr_capital(array);                

    
    3. Sum of all numbers in an array:

    let array=[10,20,30,40,50];        
   var sum=0;
   let sum_array=(array)=>{            
     
       for(let i=0;i<array.length;i++)
       {
           
           sum=sum+array[i];        
           
       }
       console.log(sum);
   }
   sum_array(array);                  
           


   4.Return all the palindromes in an array:

   var array=["nayan","mam"];               
    var array_01=array[0];
    let array_02=array[1];
    var arr_split_01=array_01.split("");        
    var arr_reversed=arr_split_01.reverse();
    let arr_split_02=array_02.split("");
    let arr_reversed_02=arr_split_02.reverse();
    var arr_polidrom=(arr_reversed,arr_reversed_02)=>{  
        console.log(`${arr_reversed.join("")}  ${ arr_reversed_02.join("")}`); 
    }
    
    
  
    arr_polidrom(arr_reversed,arr_reversed_02); 

  