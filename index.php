<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="vijay">
    <title>Document</title>
    <link rel="stylesheet" href="p_1.css">
</head>
<body>
<?php

if(isset($_POST["sub"])){
   $txt = $_POST["sub"];
   $txt =htmlspecialchars($txt);
   $txt = rawurlencode($txt);
   $html = file_get_contents('https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&q='.$txt.'&tl=en-IN');
   $player="<audio controls='controls' autoplay><source src='data:audio/mpeg;base64,".base64_encode($html)."'></audio>";
   echo $player;
}


?>
<form method="post">
   

<div id="box">
    <h1>Random emotion generator</h1>
    <p id="emoj"></p>
    <input id="btnemo" onclick="getemoja()" type="submit" name="sub" value="">
</div>

</form>
    
  
  <script src="p_1.js"></script>
</body>
</html>
