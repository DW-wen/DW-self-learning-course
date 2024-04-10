import {test1, getData, saveData, test2} from '../scripts/saveData.js';
import {displayData} from './screen_display.js';
console.log('test');
function addInside(){
    
    document.querySelector('.add').addEventListener('click', function(){
        let id = document.querySelector('.input-number').value;
        id = Number(id);
        
        let title = document.querySelector('.input-name').value;
        let author = document.querySelector('.input-author').value;
        let info = document.querySelector('.input-info').value;
        let web = document.querySelector('.web').value;
        
        if(!id || !title || !author || !info || !web){
            alert('do not input completely');
        }
        else{
            let get = getData();
            /*
            console.log(typeof get);
            let save = {
            id: id,
            info: info ,
            infoClick: false,
            showID: false,
            like: false,
            author: author,
            title: title,
            image: '/video/emily_3.jpg'
            };
            */
            
            //add in objet
            get.push({ 
              id: id,
              info: info ,
              infoClick: false,
              showID: false,
              like: false,
              author: author,
              title: title,
              image: '/video/emily_3.jpg'
            });
            
            saveData(get);
            
            displayData();
            window.location.reload(); // 刷新介面
        }
    });
}

addInside();