-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 01, 2022 at 05:06 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
-- Table structure for table `icones`
--

CREATE TABLE `icones` (
  `url` varchar(500) NOT NULL,
  `taille_long` int(11) NOT NULL,
  `taille_larg` int(11) NOT NULL,
  `id_icone` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `icones`
--

INSERT INTO `icones` (`url`, `taille_long`, `taille_larg`, `id_icone`) VALUES
('../img/dollar.png', 38, 50, 1),
('../img/code.png', 38, 50, 2),
('../img/cadena.png', 38, 50, 3);

-- --------------------------------------------------------

--
-- Table structure for table `nom_joueur`
--

CREATE TABLE `nom_joueur` (
  `id_joueur` varchar(255) DEFAULT NULL,
  `score` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nom_joueur`
--

INSERT INTO `nom_joueur` (`id_joueur`, `score`) VALUES
('nom_oueur', 0),
('fezzz', 0),
('', 0),
('', 0);

-- --------------------------------------------------------

--
-- Table structure for table `objet`
--

CREATE TABLE `objet` (
  `id_icone` int(11) NOT NULL,
  `minZoomVisible` int(11) NOT NULL,
  `depart` tinyint(1) NOT NULL,
  `id_objet` int(11) NOT NULL,
  `code_objet` tinyint(1) NOT NULL,
  `objet_bloque` tinyint(1) NOT NULL,
  `id_point` int(11) NOT NULL,
  `popup` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `objet`
--

INSERT INTO `objet` (`id_icone`, `minZoomVisible`, `depart`, `id_objet`, `code_objet`, `objet_bloque`, `id_point`, `popup`) VALUES
(1, 0, 0, 1, 0, 0, 1, ''),
(2, 0, 1, 2, 1, 0, 2, '<iframe id=\"inlineFrameExample\"\r\n    title=\"Inline Frame Example\"\r\n    width=\"300\"\r\n    height=\"100\"\r\n    src=\"../HTML/iframe_code.html\">\r\n</iframe>');

-- --------------------------------------------------------

--
-- Table structure for table `objet_bloque_par_objet`
--

CREATE TABLE `objet_bloque_par_objet` (
  `indice` text NOT NULL,
  `id_objet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `objet_code`
--

CREATE TABLE `objet_code` (
  `id_objet` int(11) NOT NULL,
  `code_objet` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `objet_code`
--

INSERT INTO `objet_code` (`id_objet`, `code_objet`) VALUES
(2, 1234);

-- --------------------------------------------------------

--
-- Table structure for table `point`
--

CREATE TABLE `point` (
  `lat` double NOT NULL,
  `long` double NOT NULL,
  `id_point` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `point`
--

INSERT INTO `point` (`lat`, `long`, `id_point`) VALUES
(48.8926, 2.28785, 1),
(48.889, 2.28789, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `icones`
--
ALTER TABLE `icones`
  ADD PRIMARY KEY (`id_icone`);

--
-- Indexes for table `objet`
--
ALTER TABLE `objet`
  ADD PRIMARY KEY (`id_objet`);

--
-- Indexes for table `point`
--
ALTER TABLE `point`
  ADD PRIMARY KEY (`id_point`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
