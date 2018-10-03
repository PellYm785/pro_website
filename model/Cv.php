<?php
class Cv {
    private $formations;
    private $typeComp;
    private $typeNiveau;
    private $competences;
    private $experiences;
    
    function __construct($formations,$typeComp,$typeNiveau,$competences,$experiences){
        $this->formations = $formations;
        $this->typeComp =  $typeComp;
        $this->typeNiveau = $typeNiveau;
        $this->competences = $competences;
        $this->experiences = $experiences;
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

    /**
     * @return mixed
     */
    public function getExperiences(){
        return $this->experiences;
    }

}
?>