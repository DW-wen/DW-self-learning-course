
//get data from localStorage
export function test1(){
    return 1 +1;
}
export let test2 = 1;

export function getData(){
    let preview = JSON.parse(localStorage.getItem('saveData')); 
    //console.log(preview);
    /*
        當我把所有東西刪掉的時候，由於我們已經先前刪掉所有預設的值，
        但是原來的 saveData 還沒刪除名稱，只是將其值刪除。故名稱保留，不會被判斷為 null 然後加入預設值
    */
    
    if(!preview){ // 判斷 localStorage 是否有東西，沒有添加預設值
        
        preview = [{
            id: 1,
            info: 'i love you, do you love me to asdfghjdfghjkjhgfghjkjf' ,
            infoClick: false, // false is turn off
            showID: false,
            like: false,
            author: 'me',
            title: 'Re0',
            image: '/video/emily_1.jpg'
        },{
            id: 2,
            info: 'i love you, do you love me to asdfghjdfghjkjhgfghjkjf' ,
            infoClick: false,
            showID: false,
            like: false,
            author: 'daniel',
            title: 'Re0',
            image: '/video/emily_2.jpg'
        },{
            id: 3,
            info: 'i love you, do you love me to asdfghjdfghjkjhgfghjkjf' ,
            infoClick: false,
            showID: false,
            like: false,
            author: 'daniel',
            title: 'Re0',
            image: '/video/emily_2.jpg'
        }
    ];
    }
    return preview;
}

// save data in localStorage
export function saveData(parameter){
     // 轉成 string 後儲存
    //console.log( parameter);
    // parameter 物件陣列
    localStorage.setItem("saveData", JSON.stringify(parameter)); //只能存 object
}

