-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 04, 2022 at 04:33 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `escapegame`
--

-- --------------------------------------------------------

--
-- Table structure for table `objet`
--

CREATE TABLE `objet` (
  `id_objet` int(11) NOT NULL,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL,
  `ID_type` int(11) NOT NULL,
  `URL_image` varchar(1000) NOT NULL,
  `Code` int(11) NOT NULL,
  `objet_suivant` int(10) NOT NULL,
  `popup` varchar(1000) NOT NULL,
  `popupbis` varchar(1000) NOT NULL,
  `objet_inventaire` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `objet`
--

INSERT INTO `objet` (`id_objet`, `longitude`, `latitude`, `ID_type`, `URL_image`, `Code`, `objet_suivant`, `popup`, `popupbis`, `objet_inventaire`) VALUES
(1, 48.888462, 2.29688, 4, '../img/cafe.png', 0, 0, '\"On vous donne un rendez-vous au nord de la ville dans le parc des Chanteraines\"', '0', '\"ceci est l\'objet\"'),
(2, 48.939153, 2.3116771, 4, '../img/parc.png', 4, 0, '\"On vous donne une promesse de vente et !! On vous appelle pour une affaire urgente à la mairie\"', '0', ''),
(3, 48.892684, 2.287328, 4, '../img/mairie.png', 2, 3, '\"Lors d\'une réunion de dernière minute, vous apprenez que madame Desfontaines veut vous faire part d\'un cadeau, accompagnez la à la banque de France\"', '0', 'hjgkfldms'),
(4, 48.865289, 2.340198, 2, '../img/banque.png', 1, 5, '\"Mince ! Elle ne se souvient plus de code d\'entrée, allez chez elle demander le code à son marie, elle habiterai sur l\'île Saint-Louis\" ', '0', 'gfgfdrrrrrrrrrrrrrrrrrrrr'),
(5, 48.851557, 2.35692, 3, '../img/code.png', 3, 2, '\"Votre femme vous appelle en urgence et vous dit de venir très rapidement à Caen, prenez l\'avion à l\'aéroport Paris-Charles de Gaulle\"', '\"Le marie vous informe que le code est 2525\"', 'dfgyuio'),
(6, 49.002945, 2.544352, 0, '../img/avion.png', 21, 21, '\"Retournez à l\'aéroport\"', '\"Aller dans votre maison de vacances à giverny\"', 'dfghjkjhgfd'),
(7, 49.073748, 1.539402, 1, '../img/manoir.png', 852, 85, '\"Vous arriver à l\'aéroport de Caen\"', '\"Retournez à l\'aéroport\"', 'lkjhgfd'),
(8, 49.183118, -0.456529, 4, '../img/avion.png', 52, 452, '\"Votre femme vous rappelle, allez dans le centre ville de Caen\"', 'likyujtgreds', 'nbfvdcsx'),
(9, 49.181472, -0.370622, 0, '../img/biere.png', 45, 45, '\"Voici votre femme ! Elle vous a fait une petite surprise et vous emmène à l’hôtel\"', '\"Vous oubliez de lui prendre des fleurs! Allez lui cueillir des fleurs dans le parc du golf,au Nord de la ville, vous en profiterez en même temps pour peaufinez votre swing.\"', ';kj,hgbfvdc'),
(10, 49.227959, -0.336221, 1, '../img/golf.png', 5, 452, '\"Voici votre femme ! Elle vous a fait une petite surprise et vous emmène à l’hôtel\"', '\"Après cette petite promenade de santé, et une petite partie de golf, retournez voir votre femme.\"', 'nbgfds');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `objet`
--
ALTER TABLE `objet`
  ADD PRIMARY KEY (`id_objet`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
