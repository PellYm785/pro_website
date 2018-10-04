<section id="LM" class="show">
	<article>
		<div class="tete">
			<p class="sans_espace"><?php echo $xml->nom ?></p>
			<p class="sans_espace"><?php echo $xml->adresse ?></p>
			<p class="sans_espace"><?php echo $xml->ville ?></p>
			<p class="sans_espace_top"><?php echo $xml->contact ?></p>
		</div>
		<p id="date"><?php echo $xml->date ?></p>


		<div class="tete">
			<p><?php echo $xml->sujet ?></p>
		</div>
		<p id="debutCorps"><?php echo $xml->debutCorps ?></p>

		<div id="corps">


			<p><?php echo $xml->introduction ?></p>
			<p><?php echo $xml->corpsPrincipal ?></p>
			<p><?php echo $xml->fin ?></p>
			<p><?php echo $xml->politesse ?></p>


		</div>
		<p id="pied"><?php echo $xml->nom ?></p>
	</article>
</section>
