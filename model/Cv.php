<?php
class Cv {
    private $formations;
    private $typeComp;
    private $typeNiveau;
    private $competences;
    
    function __construct($formations,$typeComp,$typeNiveau,$competences){
        $this->formations = $formations;
        $this->typeComp =  $typeComp;
        $this->typeNiveau = $typeNiveau;
        $this->competences = $competences;
    }
    /**
     * @return mixed
     */
    public function getFormations(){
        return $this->formations;
    }

    /**
     * @return mixed
     */
    public function getTypeComp(){
        return $this->typeComp;
    }

    /**
     * @return mixed
     */
    public function getTypeNiveau(){
        return $this->typeNiveau;
    }

    /**
     * @return mixed
     */
    public function getCompetences(){
        return $this->competences;
    }

    
    
}
?>