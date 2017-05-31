INSERT INTO `tucker_db`.`customers` (`first_name`, `last_name`,`phone`, `email`, `password`, `role`) VALUES ('kostya', 'koby','202-650-9228', 'kos.koha@gmail.com', '$2a$08$MxdiE5y3tM1zZfzwzVSdnOqFhgb.diWxzbIZlSobcLp0sXHHfAnh6','customer');
INSERT INTO `tucker_db`.`customers` (`first_name`, `last_name`,`phone`, `email`, `password`, `role`) VALUES ('alf', 'burg', '202-549-9855', 'alf_burga@gmail.com', '$2a$08$MxdiE5y3tM1zZfzwzVSdnOqFhgb.diWxzbIZlSobcLp0sXHHfAnh6','customer');
INSERT INTO `tucker_db`.`customers` (`first_name`, `last_name`, `phone`, `email`, `password`, `role`) VALUES ('Mariya', 'Klyu','111-222-3333', 'mari92@gmail.com', '$2a$08$MxdiE5y3tM1zZfzwzVSdnOqFhgb.diWxzbIZlSobcLp0sXHHfAnh6','customer');

INSERT INTO `tucker_db`.`Stores` (`website`, `storeName`, `email`, `phone`, `pickupOption`, `deliveryOption`) VALUES ('www.giant.com', 'giant', 'info@giant.com', '202-555-5555', true, false);

INSERT INTO `tucker_db`.`addresses` (`street`, `city`, `state`, `zip_code`, `CustomerId`, `StoreId`) VALUES ('121 Congressional ln', 'Rockville', 'MD', '20850', '1', '1');
INSERT INTO `tucker_db`.`addresses` (`street`, `city`, `state`, `zip_code`, `CustomerId`, `StoreId`) VALUES ('32 River Rd', 'Bethesda', 'MD', '32445', '3', '1');

INSERT INTO `tucker_db`.`ProductDescriptions` (`productName`, `description`) VALUES ('cucumber', 'vegetable greeen');
INSERT INTO `tucker_db`.`ProductDescriptions` (`productName`, `description`) VALUES ('carrot', 'vegetable');


INSERT INTO `tucker_db`.`Products` (`price`, `inStock`, `discounted`, `discountedPrice`, `ProductDescriptionId`, `StoreId`) VALUES (5, 200, true,2, 1,1);
INSERT INTO `tucker_db`.`products` (`price`, `inStock`, `discounted`, `discountedPrice`, `ProductDescriptionId`, `StoreId`) VALUES (3, 134, false, 0, 2, 1);


INSERT INTO `tucker_db`.`buckets` (`CustomerId`, `ProductId`) VALUES ('1', '1');
INSERT INTO `tucker_db`.`buckets` (`CustomerId`, `ProductId`) VALUES ('1', '2');

