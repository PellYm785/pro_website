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

    $dsn = 'mysql:host='.$host.';dbname='.$dbname.';charset=UTF8';
    $connex = new PDO($dsn, $user, $mdp);

    unset($host, $dbname, $mdp, $user);

    $requete = "SELECT * FROM Formations";
    $forms = requeteSqlObj($connex, $requete);

    $requete = "SELECT * FROM Experience";
    $exps = requeteSqlObj($connex, $requete);

    $requete = "SELECT type FROM TypeComp";
    $typeComp = requeteSqlNum($connex, $requete);

    $requete = "SELECT niveau FROM NiveauComp";
    $typeNiveau = requeteSqlNum($connex, $requete);

    $requete = "SELECT nom, TypeComp.type, NiveauComp.niveau FROM Competences
				INNER JOIN TypeComp ON Competences.type = TypeComp.id
				LEFT JOIN NiveauComp ON Competences.niveau = NiveauComp.id";
    $comps = requeteSqlObj($connex, $requete);

    $cv = new Cv($forms, $typeComp, $typeNiveau, $comps, $exps);
    unset($connex);

} catch (PDOException $e) {
    echo $e->getMessage();
}


return $cv;
?>
