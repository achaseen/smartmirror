<?php
if($_POST)
{
 $name = $_POST['name'];
 $order = $_POST['order'];
 $check = $_POST['check'];
 
 $myfile = fopen("../web/javascript/Config.jsonp", "w") or die("Unable to open file!");
 $txt = "jsonCallback({\n";
 fwrite($myfile, $txt);
 $txt = '"name":["'.implode('","', $name).'"],'."\n";
 fwrite($myfile, $txt);
 $txt = '"order":['.implode(",", $order)."],\n";
 fwrite($myfile, $txt);
 $txt = '"check":["'.implode('","',$check).'"]';
 fwrite($myfile, $txt);
 $txt = "\n});";
 fwrite($myfile, $txt);
 fclose($myfile);
}

?>
