INSERT INTO `tucker_db`.`customers` (`first_name`, `last_name`,`phone`, `email`, `password`) VALUES ('kostya', 'koby','202-650-9228', 'kos.koha@gmail.com', '1111');
INSERT INTO `tucker_db`.`customers` (`first_name`, `last_name`,`phone`, `email`, `password`) VALUES ('alf', 'burg', '202-549-9855', 'alf_burga@gmail.com', '1111');
INSERT INTO `tucker_db`.`customers` (`first_name`, `last_name`, `phone`, `email`, `password`) VALUES ('Mariya', 'Klyu','111-222-3333', 'mari92@gmail.com', '1111');

INSERT INTO `tucker_db`.`addresses` (`street`, `city`, `state`, `zip_code`, `CustomerId`) VALUES ('121 Congressional ln', 'Rockville', 'MD', '20850', '1');
INSERT INTO `tucker_db`.`addresses` (`street`, `city`, `state`, `zip_code`, `CustomerId`) VALUES ('32 River Rd', 'Bethesda', 'MD', '32445', '2');

INSERT INTO `tucker_db`.`Products` (`productName`, `description`) VALUES ('cucumber', 'vegetable greeen');
INSERT INTO `tucker_db`.`Products` (`productName`, `description`) VALUES ('carrot', 'vegetable');

INSERT INTO `tucker_db`.`Stores` (`website`, `storeName`, `email`, `phone`, `pickupOption`, `deliveryOption`) VALUES ('www.giant.com', 'giant', 'info@giant.com', '202-555-5555', true, false);

INSERT INTO `tucker_db`.`storeProducts` (`price`, `inStock`, `discounted`, `discountedPrice`, `ProductId`, `StoreId`) VALUES (5, 200, true,0, 1,1);