        function irupcMoviepgurl(pgno){
            window.open("https://movieslk.herokuapp.com/Movies/"+pgno+".php")
        }

        function irupcGenrepgurl(pgno, genre){
            window.open("https://movieslk.herokuapp.com/Genres/"+genre+"/"+pgno+".php")
        }

        function irupcLangpgurl(pgno, lang){
            window.open("https://movieslk.herokuapp.com/Langages/"+lang+"/"+pgno+".php")
        }

        function irupcgenre(iptype){
            window.open("https://movieslk.herokuapp.com/Genres/"+iptype+"/1.php")
        }
        
        function irupclang(iptype){
            window.open("https://movieslk.herokuapp.com/Langages/"+iptype+"/1.php")
        }

        function irupcyear(iptype){
            window.open("https://movieslk.herokuapp.com/Years/"+iptype+"/1.php")
        }

        function irupcLetter(iptype){
            window.open("https://movieslk.herokuapp.com/Letters/"+iptype+"/1.php")
        }

        function irupctvpgurl(pgno){
            window.open("https://movieslk.herokuapp.com/TV_Shows/"+pgno+".php")
        }

        function ipLetterpgs(Letter, pgno){
            window.open("https://movieslk.herokuapp.com/Letters/"+Letter+"/"+pgno+".php")
        }

        totalmoviepgs=20;
        ipNoOfMovies=370;
