<?php 
$mois = array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin","Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre");
				
?>
<section id="CV" class="hide">
	<div id="Competences" class="section">
		<h3 class="titre_comp"><div>Comp&eacute;tences</div></h3>
		<ul id="listeComp">
			<?php 
			foreach ($cv->getTypeComp() as $categorie): 
			?>
				<li class="categorie"><?php echo $categorie ?></li>
				<?php 
					foreach ($cv->getCompetences() as $competence){
					    if($competence->type == $categorie):
				?>
				<li class="Competence"><?php echo $competence->nom ?></li>
			<?php
					    endif;
                    }
            endforeach;
			?>
			
		</ul>
	</div>

	<div id="Experiences" class="section">
		<h3 class="titre_comp"><div>Experiences</div></h3>
		<ul id="listeExp">
			<?php 
			foreach ($cv->getExperiences() as $experience):
			?>
				<li class="Experience">
					<p class="poste"><?php echo $experience->type." ".$experience->poste ?></p>
					<p><?php echo $experience->organisation ?></p>
					<p class="date">
						<?php
						$duree = ""; 
						$date_debut = date_parse($experience->debut);
						
						$date_fin = date_parse($experience->fin);
						$duree .= 'Du '.$date_debut['day'].' '.$mois[$date_debut['month']-1].' '.$date_debut['year'].' au ' ;
						$duree .= $date_fin['day'].' '.$mois[$date_fin['month']-1].' '.$date_fin['year'];
						
						echo $duree;
						?>
					</p>
				</li>
			<?php 
			endforeach; 
			?>
		</ul>
	</div>
	
	<div id="Formations" class="section">
		<h3 class="titre_comp"><div>Formations</div></h3>
		<ul id="listeForm">
			<?php 
			foreach ($cv->getFormations() as $formation):
			?>
				<li class="Formation">
					<p class="diplome"><?php echo $formation->nom ?></p>
					<p><?php echo $formation->etablissement ?></p>
					<p class="date">
						<?php
						$duree = ""; 
						$date_debut = date_parse($formation->debut);
						
						if($formation->fin == '0000-00-00'){
							$duree .= 'Depuis '.$mois[$date_debut['month']-1].' '.$date_debut['year'];
						}else{
							$date_fin = date_parse($formation->fin);
							$duree .= 'De '.$mois[$date_debut['month']-1].' '.$date_debut['year'].' à ' ;
							$duree .= $mois[$date_fin['month']-1].' '.$date_fin['year'];
						}
						echo $duree;
						?>
					</p>
					<?php if($formation->commentaire != "" ): ?>
						<p id="commentaire"><?php echo $formation->commentaire ?></p>
					<?php endif ?>
				</li>
			<?php 
			endforeach; 
			?>				
		</ul>
	</div>
	<div id="container-fleche-droite">
		<label>suivant</label>
		<svg height="30" width="30" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<polygon points="0,0 30,15 0,30" fill="black" />
        </svg>
	</div>
</section>