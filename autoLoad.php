<?php
/**
 * Created by PhpStorm.
 * User: willi
 * Date: 30/11/2018
 * Time: 19:27
 */

function importClass($class) {
    $path = str_replace('\\', DIRECTORY_SEPARATOR, $class);
    require_once($path . '.php');
}
spl_autoload_register('importClass');