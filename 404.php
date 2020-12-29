<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Get Current URL in JavaScript</title>
</head>
<body>
    <script>
    function getURL() {
        window.open("https://xyz"+location.href.replace(/.*\/\/[^\/]*/, ''));
    }
    </script>
     
    <button type="button" onclick="getURL();">Get Page URL</button>
</body>
</html>
