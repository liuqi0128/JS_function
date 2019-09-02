 /**
     * ajax----自动判断数据类型
     * @param {*} type      请求方式
     * @param {*} url       请求地址
     * @param {*} data      请求数据
     * @param {*} success    回调函数
     */
    function all(option){
        var xhr=new XMLHttpRequest();
        //get   有数据
        if(option.type == 'get' && option.data){
            option.url+='?';
            option.url+=option.data;
            option.data=null;
        }
        xhr.open(option.type,option.url);
        //post   有数据
        if(option.type == 'post' && option.data){
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        }
        xhr.onreadystatechange=function(){
            //console.log(xhr.getResponseHeader('Content-Type'));
            var type=xhr.getResponseHeader('Content-Type');
            //判断json
            if(type.indexOf('json')!=-1){
                option.success(JSON.parse(xhr.responseText));
            }
            //判断xml
            else if(type.indexOf('xml')!=-1){
                option.success(xhr.responseXML);
            }
            //输出普通文本
            else{   
                option.success(xhr.responseText);
            }
        }
        
        xhr.send(option.data);
    }
