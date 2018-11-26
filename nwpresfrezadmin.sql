-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Hôte : nwpresfrezadmin.mysql.db
-- Généré le :  jeu. 04 oct. 2018 à 00:26
-- Version du serveur :  5.6.39-log
-- Version de PHP :  7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `nwpresfrezadmin`
--

-- --------------------------------------------------------

--
-- Structure de la table `CodeSource`
--

CREATE TABLE `CodeSource` (
  `id_code` int(11) NOT NULL,
  `nom` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `lien` varchar(44) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `CodeSource`
--

INSERT INTO `CodeSource` (`id_code`, `nom`, `type`, `lien`) VALUES
(1, 'index', 'HTML', 'https://nw-pres.fr/index.html'),
(2, 'ordi_pleinEcran', 'CSS', 'https://nw-pres.fr/style/ordi_plein_ecran.css'),
(3, 'ordi_fenetre', 'CSS', 'https://nw-pres.fr/style/ordi_fenetre.css'),
(4, 'smartphone', 'CSS', 'https://nw-pres.fr/style/smartphone.css'),
(5, 'base', 'Javascript', 'https://nw-pres.fr/script/base.js'),
(6, 'construction_LM', 'Javascript', 'https://nw-pres.fr/script/construction_LM.js'),
(7, 'construction_CV', 'Javascript', 'https://nw-pres.fr/script/construction_CV.js'),
(8, 'anim_CV', 'Javascript', 'https://nw-pres.fr/script/anim_CV.js'),
(9, 'infos_CV', 'PHP', 'https://nw-pres.fr/infos_CV.php'),
(10, 'infos_CS', 'PHP', 'https://nw-pres.fr/infos_CS.php'),
(11, 'construction_CS', 'Javascript', 'https://nw-pres.fr/script/construction_CS.js');

-- --------------------------------------------------------

--
-- Structure de la table `Competences`
--

CREATE TABLE `Competences` (
  `id_comp` int(11) NOT NULL,
  `nom` varchar(20) COLLATE utf8_bin NOT NULL,
  `type` int(11) DEFAULT NULL,
  `niveau` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `Competences`
--

INSERT INTO `Competences` (`id_comp`, `nom`, `type`, `niveau`) VALUES
(1, 'C', 1, 2),
(2, 'Java', 1, 2),
(3, 'Javascript', 1, 3),
(4, 'Jquery', 1, 2),
(5, 'AJAX', 1, 2),
(6, 'PHP', 1, 3),
(7, 'Bash', 1, 1),
(8, 'Python', 1, 1),
(9, 'Flask', 2, 1),
(10, 'HTML', 2, 3),
(11, 'CSS', 2, 3),
(12, 'MySQL', 3, 3),
(13, 'PhpMyAdmin', 3, 3),
(14, 'Eclipse', 4, 0),
(15, 'CodeBlocks', 4, 0),
(16, 'LibreOffice', 4, 0),
(17, 'Arduino', 5, 2),
(18, 'Windows 10', 6, 1),
(19, 'Windows 8', 6, 1),
(20, 'Windows 7', 6, 1),
(21, 'Linux Debian', 6, 2),
(22, 'Linux Mandriva', 6, 2),
(23, 'Hardware', 5, 1),
(24, 'Anglais', 7, 2),
(25, 'Allemand', 7, 1),
(26, 'Apprentissage rapide', 8, 0),
(27, 'Bonne mémoire', 8, 0),
(28, 'Pragmatique', 8, 0),
(29, 'Amical', 8, 0),
(32, 'Symphony', 1, 2),
(38, 'Android', 1, 0),
(39, 'MVC', 1, 2),
(40, 'Merise', 3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `Experience`
--

CREATE TABLE `Experience` (
  `id` int(11) NOT NULL,
  `poste` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `debut` date NOT NULL,
  `fin` date DEFAULT NULL,
  `organisation` varchar(255) NOT NULL,
  `type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Experience`
--

INSERT INTO `Experience` (`id`, `poste`, `debut`, `fin`, `organisation`, `type`) VALUES
(1, 'Webmaster', '2018-05-28', '2018-06-28', 'Entreprise Michelange', 'Stage');

-- --------------------------------------------------------

--
-- Structure de la table `Formations`
--

CREATE TABLE `Formations` (
  `id_form` int(11) NOT NULL,
  `nom` varchar(9) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `etablissement` varchar(25) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `ville` char(8) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `debut` date NOT NULL,
  `fin` date DEFAULT NULL,
  `commentaire` char(21) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Formations`
--

INSERT INTO `Formations` (`id_form`, `nom`, `etablissement`, `ville`, `debut`, `fin`, `commentaire`) VALUES
(1, 'BTS SIO', 'Lycée Alienor d Aquitaine', 'Poitiers', '2017-09-00', '0000-00-00', ''),
(2, 'BAC STI2D', 'Lycée Nelson Mandela', 'Poitiers', '2016-09-00', '2017-06-00', 'Obtenu : Mention Bien');

-- --------------------------------------------------------

--
-- Structure de la table `NiveauComp`
--

CREATE TABLE `NiveauComp` (
  `id` int(11) NOT NULL,
  `niveau` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `NiveauComp`
--

INSERT INTO `NiveauComp` (`id`, `niveau`) VALUES
(1, 'Notions'),
(2, 'Intermédiaire'),
(3, 'Bon niveau'),
(4, 'Avancé'),
(5, 'Expert');

-- --------------------------------------------------------

--
-- Structure de la table `TypeComp`
--

CREATE TABLE `TypeComp` (
  `id` int(11) NOT NULL,
  `type` varchar(72) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `TypeComp`
--

INSERT INTO `TypeComp` (`id`, `type`) VALUES
(1, 'Programmation'),
(2, 'Web'),
(3, 'Base de donnée'),
(4, 'Logiciel'),
(5, 'Matériel'),
(6, 'OS'),
(7, 'Langue'),
(8, 'Qualité');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `CodeSource`
--
ALTER TABLE `CodeSource`
  ADD PRIMARY KEY (`id_code`);

--
-- Index pour la table `Competences`
--
ALTER TABLE `Competences`
  ADD PRIMARY KEY (`id_comp`),
  ADD KEY `lien_comp_type` (`type`),
  ADD KEY `lien_comp_niveau` (`niveau`);

--
-- Index pour la table `Experience`
--
ALTER TABLE `Experience`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Formations`
--
ALTER TABLE `Formations`
  ADD PRIMARY KEY (`id_form`);

--
-- Index pour la table `NiveauComp`
--
ALTER TABLE `NiveauComp`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `TypeComp`
--
ALTER TABLE `TypeComp`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `CodeSource`
--
ALTER TABLE `CodeSource`
  MODIFY `id_code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT pour la table `Competences`
--
ALTER TABLE `Competences`
  MODIFY `id_comp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT pour la table `Experience`
--
ALTER TABLE `Experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `Formations`
--
ALTER TABLE `Formations`
  MODIFY `id_form` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `NiveauComp`
--
ALTER TABLE `NiveauComp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `TypeComp`
--
ALTER TABLE `TypeComp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Competences`
--
ALTER TABLE `Competences`
  ADD CONSTRAINT `lien_comp_niveau` FOREIGN KEY (`niveau`) REFERENCES `NiveauComp` (`id`),
  ADD CONSTRAINT `lien_comp_type` FOREIGN KEY (`type`) REFERENCES `TypeComp` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
