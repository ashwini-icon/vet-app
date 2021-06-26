-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 26, 2021 at 06:56 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vet_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `chapter_head`
--

DROP TABLE IF EXISTS `chapter_head`;
CREATE TABLE IF NOT EXISTS `chapter_head` (
  `chapter_id` varchar(155) NOT NULL,
  `chapter_name` varchar(155) NOT NULL,
  PRIMARY KEY (`chapter_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `chapter_head`
--

INSERT INTO `chapter_head` (`chapter_id`, `chapter_name`) VALUES
('292bd12d-a5d0-4693-a2e0-c22c4152f679', 'Chapter Name'),
('c84faad9-7bbb-41b8-aed4-0117c39e3171', 'Chapter Number 2');

-- --------------------------------------------------------

--
-- Table structure for table `chapter_subhead`
--

DROP TABLE IF EXISTS `chapter_subhead`;
CREATE TABLE IF NOT EXISTS `chapter_subhead` (
  `subhead_id` varchar(155) NOT NULL,
  `subhead_name` varchar(255) NOT NULL,
  `fk_chapter_id` varchar(255) NOT NULL,
  PRIMARY KEY (`subhead_id`),
  KEY `fk_chapter_id` (`fk_chapter_id`(250))
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `chapter_subhead`
--

INSERT INTO `chapter_subhead` (`subhead_id`, `subhead_name`, `fk_chapter_id`) VALUES
('2fa41465-81ca-41b0-be1d-34c441619eb4', 'Subchapter Name', '292bd12d-a5d0-4693-a2e0-c22c4152f679'),
('3e3ec024-f35a-4635-8348-9f73dddab911', 'Subchapter Name', 'c84faad9-7bbb-41b8-aed4-0117c39e3171');

-- --------------------------------------------------------

--
-- Table structure for table `main_content`
--

DROP TABLE IF EXISTS `main_content`;
CREATE TABLE IF NOT EXISTS `main_content` (
  `containt_id` varchar(155) NOT NULL,
  `main_title` varchar(255) NOT NULL,
  `author` varchar(155) NOT NULL,
  `author_designation` varchar(255) NOT NULL,
  `date_of_creation` date NOT NULL,
  `date_of_modify` date NOT NULL,
  `content_data` varchar(255) NOT NULL,
  `fk_subhead_id` varchar(255) NOT NULL,
  PRIMARY KEY (`containt_id`),
  KEY `fk_subhead_id` (`fk_subhead_id`(250))
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `main_content`
--

INSERT INTO `main_content` (`containt_id`, `main_title`, `author`, `author_designation`, `date_of_creation`, `date_of_modify`, `content_data`, `fk_subhead_id`) VALUES
('1f5a00a2-d220-4caa-a710-3926614b8597', 'Chapter content Heading', '', '', '0000-00-00', '0000-00-00', 'Content', '2fa41465-81ca-41b0-be1d-34c441619eb4'),
('c41a4d70-16d7-4a3c-95d2-abacf7cfe499', 'Chapter Content Heading', '', '', '0000-00-00', '0000-00-00', 'Test', '3e3ec024-f35a-4635-8348-9f73dddab911');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `unique_id` varchar(155) NOT NULL,
  `full_name` varchar(155) NOT NULL,
  `email_id` varchar(155) NOT NULL,
  `password` varchar(155) NOT NULL,
  `phone` varchar(155) NOT NULL,
  `role` int(155) DEFAULT NULL,
  PRIMARY KEY (`unique_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`unique_id`, `full_name`, `email_id`, `password`, `phone`, `role`) VALUES
('asdfasdfasdf', 'John Doe', 'ramakantsali@gbrositsolutions.com', '123456', '1234567890', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
