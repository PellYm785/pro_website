<section id="CV" class="hide">
	<div id="Competences">
		<h3 class="titre_comp"><div>Comp&eacute;tences</div></h3>
		<ul id="listeComp">
			<?php foreach ($cv->getTypeComp() as $categorie): ?>
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

	<div id="Formations">
		<h3 class="titre_comp"><div>Formations</div></h3>
		<ul id="listeForm">
			<?php 
				$mois = array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
			"Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre");
				foreach ($cv->getFormations() as $formation):
			?>
				<li class="Formation">
					<p class="diplome"><?php echo $formation->nom ?></p>
					<p><?php echo $formation->etablissement ?></p>
					<p class="date">
						<?php
						$duree = ""; 
						$mois_en_nb_debut = intval(substr($formation->debut,3,2));
						
						$mois_annee = $mois[$mois_en_nb_debut - 1].' '.substr($formation->debut,0,4);
						
						if($formation->fin == '0000-00-00'){
							$duree .= "Depuis $mois_annee";
						}else{
							$duree .= "De $mois_annee à ";
							$mois_en_nb_fin = intval(substr($formation->fin,3,2));
							$duree .= $mois[$mois_en_nb_fin-1].' '.substr($formation->fin,0,4);
						}
						echo $duree;
						?>
					</p>
					<?php if($formation->commentaire != "" ): ?>
						<p id="commentaire"><?php echo $formation->commentaire ?></p>
					<?php endif ?>
				</li>
			<?php endforeach; ?>
					
		</ul>
	</div>
</section>