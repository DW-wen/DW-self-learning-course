import {test1, getData, saveData, test2} from '../scripts/saveData.js';
function search(){
    let search = document.querySelector('.input-bar').value;
    let choose = document.querySelector('.type-select').value;
    let category = document.querySelector('.category-select').value;
    let web = document.querySelector('.web-select').value;
    
    if(!search || !choose || !category || !web){
        alert('do not input completely');
    }
    else{
        console.log(search, choose, category, web);
        
        search = Number(search);
        if(choose === 'type'){
            if(category === 'video'){
                console.log(12);
            }
            else if(category === 'manga'){
                console.log(12);
            }
            else if(category === 'novel'){
                console.log(12);
            }
        }
        else{
            if(category === 'video'){
                console.log(12);
            }
            else if(category === 'manga'){
                if(web === "hi"){
                    console.log(100);
                    location.href=`https://m.manhuagui.com/comic/${search}`;
                }
            }
            else if(category === 'novel'){
                console.log(12);
            }
        }
    }

}
document.querySelector('.enter').addEventListener('click', function(){
    search();
});
