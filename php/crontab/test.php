<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/2
 * Time: 0:23
 */

include_once __DIR__ . '/function.php';

$url = 'https://www.guke1.com/php/index.php/index/index/cron';

$i = 1;
do {
    $result = httpGet($url);
    echo $result;

    $i++;

    if (date('Hi') > 2200) {
        $i = 0;
    }
    sleep(200);
} while ($i > 0);