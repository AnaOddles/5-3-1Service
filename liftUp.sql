-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 07, 2022 at 10:07 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `lift_up`
--

-- --------------------------------------------------------

--
-- Table structure for table `auxiliary`
--

CREATE TABLE `auxiliary` (
  `auxiliary_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `lift_type` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `auxiliary`
--

INSERT INTO `auxiliary` (`auxiliary_id`, `name`, `user_id`, `lift_type`, `description`) VALUES
(10, 'Curls', 1, 'Bench', 'example description for curls'),
(11, 'Over-head press', 1, 'Bench', 'example description for over-head press'),
(12, 'Lunges', 1, 'Squat', 'example description for lunges'),
(13, 'Leg Press', 1, 'Squat', 'example description for leg press'),
(14, 'Dumbbell Rows', 2, 'Deadlift', 'example description for dumbbell rows'),
(15, 'Lat pull down', 2, 'Deadlift', 'example description for lat pull down');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auxiliary`
--
ALTER TABLE `auxiliary`
  ADD PRIMARY KEY (`auxiliary_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auxiliary`
--
ALTER TABLE `auxiliary`
  MODIFY `auxiliary_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
