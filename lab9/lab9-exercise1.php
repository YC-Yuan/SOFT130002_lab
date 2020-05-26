<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
date_default_timezone_set("PRC");
$remaining = 365 - date("z");
$year = date("Y");
if ($year % 4 == 0 && $year % 100 != 0) {
    $remaining += 1;
}
echo "There are " . $remaining . " days left in the year";
?>
</body>
</html>