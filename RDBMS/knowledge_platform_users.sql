-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: knowledge_platform
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'honey','honey@test.com','$2b$10$5yu/zy.jsQkSV3n09azjYul6NnBFDoIxxkeFgH2FlOsNfkLGpRulq','2026-02-25 15:40:43'),(2,'MANVENDRA SINGH','manvendra.191200@gmail.com','$2b$10$5WWASaplmWnmDPnUqp3nqeUsxdavJF3xCUJt27FmuyckqzupK4fS2','2026-02-25 16:47:41'),(4,'HoneySingh','mandisingh@gmail>com','$2b$10$yptQzhd4KpQLK5DOsaGFd.1srexzlocyUqWhiyKbEwJtVLPWCGkDC','2026-02-25 17:31:34'),(5,'HoneySingh','mandisingh@gmail.com','$2b$10$oOVf2rCxkxrdEbq0h5M5NORt9H0pqp5R86hsCdNT3hgoSV8lvF46S','2026-02-25 17:33:02'),(6,'RUSHI','mandisingh19@gmail.com','$2b$10$g2eoXOblK6tY4l9TA7bUV.ikyt0n8cM/pjnglWjHRny94HiJ.AHJ6','2026-02-25 18:40:22'),(7,'testuser','test@test.com','$2b$10$Ai3I5GIa8SLRQhmawGNOe.vu5Ffw0pcpZ5S4V1IAaItm4rPL8l35G','2026-02-25 19:27:41'),(9,'','','$2b$10$GNEvqT8dZY4Z5X5MKEyqOOzROxQUaRBdaGzc8O/vpDDhpbWNFFeVm','2026-02-25 19:28:55'),(10,'RUSHI','12test@yahoo.com.in','$2b$10$dNIDgRY8mNuFYAEaM70vRu36YrxKIHIL3NVMNMMH0UtkoueO1myim','2026-02-25 19:44:57'),(12,'amaansk','112test@yahoo.com.in','$2b$10$cfVFqmqPmtJkg.7vGDadiuhT9Du2jkVBf60N63Nx3zOBmUdBXNZbK','2026-02-25 19:45:30'),(13,'amaansk','112test@yahoo.com','$2b$10$mZIDzp/AexdsWx3kPukFweQJga/6PcSNQjCJP4Ol54zaGycXFJUUO','2026-02-25 19:45:44'),(14,'amaan','AMAN@GMAIL.COM','$2b$10$OMn9gFCWxvCO363yribvYuYtrFXsJfGaz.ATuO8pJ9g3Ps6UCZn6i','2026-02-25 19:46:20'),(16,'amaan1','aman11@gmail.com','$2b$10$w2qR9kzFa7Sh4mhxD5vLy.FQ2Nyy08xuHlOtA2/eyZQi70dh/rRQ6','2026-02-25 19:47:07'),(17,'VAIBHAV','mandisingh22@gmail.com','$2b$10$my5F6fG.VLWvVkn6wbEw0.wA4QSDJ3b8LHqIHXwCI9rgYa/xOdWUS','2026-02-25 19:49:08'),(19,'testuser','vaibhav@gmail.com','$2b$10$LfczAePhej3BSrhPXgQ32.5.JuEmRyBJegcRlIzezrLNsOmt9LPIC','2026-02-25 19:52:58'),(21,'rushikeshFFF','vaibhav1@gmail.com','$2b$10$h.kQyY.KOdxme8q3iFrqSuGSBDOvVmpiSHIPJMd.BDhEmsIzrA0uK','2026-02-25 19:56:48'),(22,'Manvendra','maven@gmail.com','$2b$10$yuW2M1gXy24dC23TjigffeRkVpKudJwweJ7DEgU4c2mfVfsy8Z7Ta','2026-02-25 20:35:22'),(23,'Manvendra','maven1@gmail.com','$2b$10$9B8IWJc4Nv5garmtuPtPnu393DfsZsmwYDuM4jibIwKoQ2V80EmUm','2026-02-25 20:40:18'),(24,'debugtest','debugtest@gmail.com','$2b$10$kU039dee6TykmJgSEkx/WeZYJTMpjGANX3hj9BRQqo0wiPAnLcwsW','2026-02-25 21:11:50'),(25,'Akhil Singh','akhil11@gmail.com','$2b$10$x4cis9Yv0Ow/8fhu4puYcux0Aduyqlp/zXUFlbu5.E/L0lv2ZfSW.','2026-02-25 21:14:10'),(26,'Rushikesh Lolge','rushikl@gmail.com','$2b$10$cfhEPiHWtGUodJ2UpBwkL.uXdMvRv9CG6dpen1QfV/e77h3OA1b/O','2026-02-26 04:12:07'),(27,'Sonia ','soniasingh@gmail.com','$2b$10$NJvY6q9bnl9dPxutqdb3ZuiEt8PwTlWgPdXn.9Jceub9MdtAyrpP6','2026-02-26 04:22:24'),(28,'SoniaSingh','soniasingh19@gmail.com','$2b$10$I/BfZNxs7Jar8sw0f5gYX.sSPFxmnJ5PH.eLy7bKr.FpRExbxp2la','2026-02-26 05:52:37');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-10 19:06:26
