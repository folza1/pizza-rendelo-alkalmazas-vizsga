-- phpMyAdmin SQL Dump
-- version 5.2.1deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 18, 2024 at 01:36 PM
-- Server version: 10.11.6-MariaDB-0+deb12u1
-- PHP Version: 8.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pizza-rendelo-alkalmazas-vizsga`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_10_13_143841_create_pizzas_table', 1),
(6, '2024_10_13_144013_create_toppings_table', 1),
(7, '2024_10_13_144048_create_pizza_topping_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pizzas`
--

CREATE TABLE `pizzas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `image` varchar(500) NOT NULL,
  `likes` int(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pizzas`
--

INSERT INTO `pizzas` (`id`, `name`, `price`, `image`, `likes`, `created_at`, `updated_at`) VALUES
(3, 'Margherita', 3500.00, 'images/margherita-pizza.webp', 3, '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(4, 'Pepperoni', 3400.00, 'images/pepperoni-pizza.webp', 5, '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(5, 'Hawaiian', 3450.00, 'images/hawaiian-pizza.webp', 2, '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(6, 'Vegetáriánus', 3700.00, 'images/vegetarian-pizza.jpg', 1, '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(7, 'BBQ csirke', 3650.00, 'images/BBQ-chicken-pizza.jpg', 3, '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(8, '4 Sajtos', 4000.00, 'images/four-cheese-pizza.jpg', 3, '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(9, 'Tenger gyümölcsei', 4100.00, 'images/seafood-pizza.jpg', 4, '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(10, 'Spicy Mexican', 4050.00, 'images/spicy-mexican-pizza.webp', 4, '2024-10-13 13:15:31', '2024-10-13 13:15:31');

-- --------------------------------------------------------

--
-- Table structure for table `pizza_topping`
--

CREATE TABLE `pizza_topping` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pizza_id` bigint(20) UNSIGNED NOT NULL,
  `topping_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pizza_topping`
--

INSERT INTO `pizza_topping` (`id`, `pizza_id`, `topping_id`) VALUES
(7, 3, 27),
(8, 3, 28),
(9, 3, 29),
(10, 4, 30),
(11, 4, 27),
(12, 4, 31),
(13, 5, 32),
(14, 5, 33),
(15, 5, 27),
(16, 6, 34),
(17, 6, 35),
(18, 6, 36),
(19, 6, 37),
(20, 6, 27),
(21, 7, 38),
(22, 7, 39),
(23, 7, 40),
(24, 7, 27),
(25, 7, 41),
(26, 8, 27),
(27, 8, 42),
(28, 8, 43),
(29, 8, 44),
(30, 9, 45),
(31, 9, 46),
(32, 9, 47),
(33, 9, 27),
(34, 10, 48),
(35, 10, 49),
(36, 10, 40),
(37, 10, 41),
(38, 10, 27);

-- --------------------------------------------------------

--
-- Table structure for table `toppings`
--

CREATE TABLE `toppings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `toppings`
--

INSERT INTO `toppings` (`id`, `name`, `created_at`, `updated_at`) VALUES
(27, 'Mozzarella', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(28, 'Paradicsom', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(29, 'Bazsalikom', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(30, 'Pepperoni', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(31, 'Oregánó', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(32, 'Sonka', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(33, 'Ananász', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(34, 'Zöldpaprika', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(35, 'Gomba', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(36, 'Hagyma', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(37, 'Olivabogyó', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(38, 'Grillezett csirke', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(39, 'BBQ szósz', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(40, 'Piros hagyma', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(41, 'Kukorica', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(42, 'Cheddar', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(43, 'Kéksajt', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(44, 'Parmezán', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(45, 'Garnéla', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(46, 'Kagyló', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(47, 'Fokhagyma', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(48, 'Fűszeres kolbász', '2024-10-13 13:15:31', '2024-10-13 13:15:31'),
(49, 'Jalapeno', '2024-10-13 13:15:31', '2024-10-13 13:15:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pizza_topping`
--
ALTER TABLE `pizza_topping`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pizza_topping_pizza_id_foreign` (`pizza_id`),
  ADD KEY `pizza_topping_topping_id_foreign` (`topping_id`);

--
-- Indexes for table `toppings`
--
ALTER TABLE `toppings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `pizza_topping`
--
ALTER TABLE `pizza_topping`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `toppings`
--
ALTER TABLE `toppings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pizza_topping`
--
ALTER TABLE `pizza_topping`
  ADD CONSTRAINT `pizza_topping_pizza_id_foreign` FOREIGN KEY (`pizza_id`) REFERENCES `pizzas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pizza_topping_topping_id_foreign` FOREIGN KEY (`topping_id`) REFERENCES `toppings` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
