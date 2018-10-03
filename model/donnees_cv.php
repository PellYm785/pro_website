<?php

/**
 * @author willi
 *
 */
 
 include "Cv.php";
 
function requeteSqlNum($connex, $req)
{
    $resReq = array();
    $result = $connex->query($req);
    $i = 0;
    
    while ($row = $result->fetch(PDO::FETCH_NUM)) {
        $resReq[$i] = $row[0];
        $i ++;
    }
    
    $result->closeCursor();
    
    return $resReq;
}

function requeteSqlObj($connex, $req)
{
    $resReq = array();
    $result = $connex->query($req);
    $i = 0;
    
    while ($row = $result->fetch(PDO::FETCH_OBJ)) {
        $resReq[$i] = $row;
        $i ++;
    }
    
    $result->closeCursor();
    
    return $resReq;
}

$cv = null;

try {
    include ('codes/config.php');
    
    $connex = new PDO("mysql:host=$host;dbname=$dbname;charset=UTF8", $user, $mdp);
    unset($host, $dbname, $mdp, $user);
    
    $requete = "SELECT * FROM Formations";
    $forms = requeteSqlObj($connex, $requete);
    
    $requete = "SELECT DISTINCT(type) FROM Competences";
    $typeComp = requeteSqlNum($connex, $requete);
    
    $requete = "SELECT DISTINCT(niveau) FROM Competences";
    $typeNiveau = requeteSqlNum($connex, $requete);
    
    $requete = "SELECT * FROM Competences";
    $comps = requeteSqlObj($connex, $requete);
    
    $cv = new Cv($forms, $typeComp, $typeNiveau, $comps);
    
    unset($connex);
       
} catch (PDOException $e) {
    echo $e->getMessage();
}


return $cv;
?>