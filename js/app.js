var app = angular.module("testeFoster", []);

app.controller('ListaFiltro', function($scope) {
    $scope.lista = [{
        "id":1,
        "category":"animais",
        "image_thumb":"http://lorempixel.com/350/210/animals/1",
        "image_large":"http://lorempixel.com/860/520/animals/1",
        "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_button":"Leia mais"
    }, 
                    
    {
        "id":2,"category":"animais",
        "image_thumb":"http://lorempixel.com/350/210/animals/2",
        "image_large":"http://lorempixel.com/860/520/animals/2",
        "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_button":"Leia mais"
    },
                    
    {
        "id":3,"category":"animais",
        "image_thumb":"http://lorempixel.com/350/210/animals/3",
        "image_large":"http://lorempixel.com/860/520/animals/3","txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_button":"Leia mais"
    },
                    
     {
         "id":4,"category":"comida",
         "image_thumb":"http://lorempixel.com/350/210/food/1",
         "image_large":"http://lorempixel.com/860/520/food/1",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },
        
     {
         "id":5,"category":"cidade",
         "image_thumb":"http://lorempixel.com/350/210/city/1/City",
         "image_large":"http://lorempixel.com/860/520/city/1/City",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },                    

     {
         "id":6,"category":"esportes",
         "image_thumb":"http://lorempixel.com/350/210/sports/1/Sports",
         "image_large":"http://lorempixel.com/860/520/sports/1/Sports",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },
                    
     {
         "id":7,"category":"esportes",
         "image_thumb":"http://lorempixel.com/350/210/sports/2/Sports",
         "image_large":"http://lorempixel.com/860/520/sports/2/Sports",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },  
                    
     {
         "id":8,"category":"esportes",
         "image_thumb":"http://lorempixel.com/350/210/sports/3/Sports",
         "image_large":"http://lorempixel.com/860/520/sports/3/Sports",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },   
                    
     {
         "id":9,"category":"esportes",
         "image_thumb":"http://lorempixel.com/350/210/sports/4/Sports",
         "image_large":"http://lorempixel.com/860/520/sports/4/Sports",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },   
                    
     {
         "id":10,"category":"comida",
         "image_thumb":"http://lorempixel.com/350/210/food/2",
         "image_large":"http://lorempixel.com/860/520/food/2",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },      
                    
     {
         "id":11,"category":"cidade",
         "image_thumb":"http://lorempixel.com/350/210/city/2/City",
         "image_large":"http://lorempixel.com/860/520/city/2/City",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },                    

    {
        "id":12,"category":"animais",
        "image_thumb":"http://lorempixel.com/350/210/animals/4",
        "image_large":"http://lorempixel.com/860/520/animals/4",
        "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_button":"Leia mais"
    },                    
       
                    
    {
        "id":13,"category":"animais",
        "image_thumb":"http://lorempixel.com/350/210/animals/5",
        "image_large":"http://lorempixel.com/860/520/animals/5",
        "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
        "txt_button":"Leia mais"
    },
 
     {
         "id":14,"category":"animais",
         "image_thumb":"http://lorempixel.com/350/210/animals/6",
         "image_large":"http://lorempixel.com/860/520/animals/6",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },
 
 
     {
         "id":15,"category":"esportes",
         "image_thumb":"http://lorempixel.com/350/210/sports/5/Sports",
         "image_large":"http://lorempixel.com/860/520/sports/5/Sports",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },
 
 
     {
         "id":16,
         "category":"esportes",
         "image_thumb":"http://lorempixel.com/350/210/sports/6/Sports",
         "image_large":"http://lorempixel.com/860/520/sports/6/Sports",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },

 
     {
         "id":17,"category":"esportes",
         "image_thumb":"http://lorempixel.com/350/210/sports/7/Sports",
         "image_large":"http://lorempixel.com/860/520/sports/7/Sports",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },
 
 
     {
         "id":18,"category":"esportes",
         "image_thumb":"http://lorempixel.com/350/210/sports/8/Sports",
         "image_large":"http://lorempixel.com/860/520/sports/8/Sports",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },
 
 
     {
         "id":19,"category":"animais",
         "image_thumb":"http://lorempixel.com/350/210/animals/7",
         "image_large":"http://lorempixel.com/860/520/animals/7",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },
 
 
     {
         "id":20,"category":"animais",
         "image_thumb":"http://lorempixel.com/350/210/animals/8",
         "image_large":"http://lorempixel.com/860/520/animals/8",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },
 
 
     {
         "id":21,"category":"animais",
         "image_thumb":"http://lorempixel.com/350/210/animals/9",
         "image_large":"http://lorempixel.com/860/520/animals/9",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },
 
 
     {
         "id":22,"category":"esportes",
         "image_thumb":"http://lorempixel.com/350/210/sports/9/Sports",
         "image_large":"http://lorempixel.com/860/520/sports/9/Sports",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },

 
     {
         "id":23,"category":"comida",
         "image_thumb":"http://lorempixel.com/350/210/food/3",
         "image_large":"http://lorempixel.com/860/520/food/3",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     },

 
     {
         "id":24,"category":"cidade",
         "image_thumb":"http://lorempixel.com/350/210/city/3/City",
         "image_large":"http://lorempixel.com/860/520/city/3/City",
         "txt_resume":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_full":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus eros et elementum rhoncus. Donec cursus tortor dolor, a commodo eros dapibus et.",
         "txt_button":"Leia mais"
     }                    

    ];
    
});