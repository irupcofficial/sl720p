       function ipyear1(){
        document.getElementById('ipyear1').style.display='block'; document.getElementById('ipyear2').style.display='none';
    }
    function ipyear2(){
        document.getElementById('ipyear2').style.display='block'; document.getElementById('ipyear1').style.display='none';
    }
    function ipgenre1(){
        document.getElementById('ipgenre1').style.display='block'; document.getElementById('ipgenre2').style.display='none';
    }
    function ipgenre2(){
        document.getElementById('ipgenre2').style.display='block'; document.getElementById('ipgenre1').style.display='none';
    }
    function iplang1(){
        document.getElementById('iplang1').style.display='block'; document.getElementById('iplang2').style.display='none';
    }
    function iplang2(){
        document.getElementById('iplang2').style.display='block'; document.getElementById('iplang1').style.display='none';
    }

//FaceBook Messenger
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v9.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      
