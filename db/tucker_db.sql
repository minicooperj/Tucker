-- MySQL Script generated by MySQL Workbench
-- 05/18/17 13:58:18
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema tucker_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tucker_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tucker_db` DEFAULT CHARACTER SET utf8 ;
USE `tucker_db` ;

-- -----------------------------------------------------
-- Table `tucker_db`.`buckets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tucker_db`.`buckets` (
  `id_bucket` INT NOT NULL AUTO_INCREMENT,
  `id_product` INT NOT NULL,
  PRIMARY KEY (`id_bucket`),
  UNIQUE INDEX `id_product_UNIQUE` (`id_product` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tucker_db`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tucker_db`.`address` (
  `id_address` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `zip_code` INT NOT NULL,
  PRIMARY KEY (`id_address`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tucker_db`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tucker_db`.`customers` (
  `id_customer` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `dob` DATE NOT NULL,
  `id_bucket` INT NOT NULL,
  `id_address` INT NOT NULL,
  PRIMARY KEY (`id_customer`),
  UNIQUE INDEX `idCustomer_UNIQUE` (`id_customer` ASC),
  INDEX `id_bucket_idx` (`id_bucket` ASC),
  INDEX `fk_customers_address1_idx` (`id_address` ASC),
  CONSTRAINT `id_bucket`
    FOREIGN KEY (`id_bucket`)
    REFERENCES `tucker_db`.`buckets` (`id_bucket`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_customers_address1`
    FOREIGN KEY (`id_address`)
    REFERENCES `tucker_db`.`address` (`id_address`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tucker_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tucker_db`.`products` (
  `id_products` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `amount` INT NULL,
  `price` INT NULL,
  `availiability` TINYINT(1) NULL DEFAULT 1,
  `discounted` TINYINT(1) NULL DEFAULT 0,
  `discounted_price` INT NULL,
  PRIMARY KEY (`id_products`),
  UNIQUE INDEX `id_products_UNIQUE` (`id_products` ASC),
  UNIQUE INDEX `price_UNIQUE` (`price` ASC),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC),
  UNIQUE INDEX `discounted_UNIQUE` (`discounted` ASC),
  UNIQUE INDEX `availiability_UNIQUE` (`availiability` ASC),
  UNIQUE INDEX `amount_UNIQUE` (`amount` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tucker_db`.`departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tucker_db`.`departments` (
  `id_department` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `id_product` INT NOT NULL,
  PRIMARY KEY (`id_department`),
  INDEX `id_product_idx` (`id_product` ASC),
  CONSTRAINT `id_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `tucker_db`.`products` (`id_products`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tucker_db`.`stores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tucker_db`.`stores` (
  `id_store` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `id_department` INT NULL,
  `id_address` INT NULL,
  PRIMARY KEY (`id_store`),
  INDEX `id_department_idx` (`id_department` ASC),
  INDEX `id_address_idx` (`id_address` ASC),
  CONSTRAINT `id_address`
    FOREIGN KEY (`id_address`)
    REFERENCES `tucker_db`.`address` (`id_address`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_department`
    FOREIGN KEY (`id_department`)
    REFERENCES `tucker_db`.`departments` (`id_department`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tucker_db`.`buckets_has_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tucker_db`.`buckets_has_products` (
  `id_bucket` INT NOT NULL,
  `id_products` INT NOT NULL,
  PRIMARY KEY (`id_bucket`, `id_products`),
  INDEX `fk_buckets_has_products_products1_idx` (`id_products` ASC),
  INDEX `fk_buckets_has_products_buckets1_idx` (`id_bucket` ASC),
  CONSTRAINT `fk_buckets_has_products_buckets1`
    FOREIGN KEY (`id_bucket`)
    REFERENCES `tucker_db`.`buckets` (`id_bucket`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_buckets_has_products_products1`
    FOREIGN KEY (`id_products`)
    REFERENCES `tucker_db`.`products` (`id_products`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tucker_db`.`stores_has_departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tucker_db`.`stores_has_departments` (
  `id_store` INT NOT NULL,
  `id_departments` INT NOT NULL,
  PRIMARY KEY (`id_store`, `id_departments`),
  INDEX `fk_stores_has_departments_departments1_idx` (`id_departments` ASC),
  INDEX `fk_stores_has_departments_stores1_idx` (`id_store` ASC),
  CONSTRAINT `fk_stores_has_departments_stores1`
    FOREIGN KEY (`id_store`)
    REFERENCES `tucker_db`.`stores` (`id_store`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_stores_has_departments_departments1`
    FOREIGN KEY (`id_departments`)
    REFERENCES `tucker_db`.`departments` (`id_department`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tucker_db`.`stores_has_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tucker_db`.`stores_has_products` (
  `id_store` INT NOT NULL,
  `id_products` INT NOT NULL,
  PRIMARY KEY (`id_store`, `id_products`),
  INDEX `fk_stores_has_products_products1_idx` (`id_products` ASC),
  INDEX `fk_stores_has_products_stores1_idx` (`id_store` ASC),
  CONSTRAINT `fk_stores_has_products_stores1`
    FOREIGN KEY (`id_store`)
    REFERENCES `tucker_db`.`stores` (`id_store`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_stores_has_products_products1`
    FOREIGN KEY (`id_products`)
    REFERENCES `tucker_db`.`products` (`id_products`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
