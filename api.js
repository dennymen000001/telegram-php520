        var api_url = 'https://web3.appdabao.cc';
        var domain = window.location.href;
        alert(domain);
        var xhr = new XMLHttpRequest();
        xhr.open('GET',api_url+'/api/url_data.php?zhu_url='+domain, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText));
                if(JSON.parse(xhr.responseText).code == 1){
                    var url = JSON.parse(xhr.responseText).data
                    window.location.replace(url);
                }
            }
        };
        xhr.send();