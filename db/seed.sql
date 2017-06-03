INSERT INTO `tucker_db`.`customers` (`first_name`, `last_name`,`phone`, `email`, `password`, `role`) VALUES ('kostya', 'koby','202-650-9228', 'kos.koha@gmail.com', '$2a$08$MxdiE5y3tM1zZfzwzVSdnOqFhgb.diWxzbIZlSobcLp0sXHHfAnh6','customer');
INSERT INTO `tucker_db`.`customers` (`first_name`, `last_name`,`phone`, `email`, `password`, `role`) VALUES ('alf', 'burg', '202-549-9855', 'alf_burga@gmail.com', '$2a$08$MxdiE5y3tM1zZfzwzVSdnOqFhgb.diWxzbIZlSobcLp0sXHHfAnh6','customer');
INSERT INTO `tucker_db`.`customers` (`first_name`, `last_name`, `phone`, `email`, `password`, `role`) VALUES ('Mariya', 'Klyu','111-222-3333', 'mari92@gmail.com', '$2a$08$MxdiE5y3tM1zZfzwzVSdnOqFhgb.diWxzbIZlSobcLp0sXHHfAnh6','customer');

INSERT INTO `tucker_db`.`Stores` (`website`, `storeName`, `email`, `phone`, `pickupOption`, `deliveryOption`) VALUES ('www.giant.com', 'giant', 'info@giant.com', '202-555-5555', true, false);

INSERT INTO `tucker_db`.`addresses` (`street`, `city`, `state`, `zip_code`, `CustomerId`, `StoreId`) VALUES ('121 Congressional ln', 'Rockville', 'MD', '20850', '1', '1');
INSERT INTO `tucker_db`.`addresses` (`street`, `city`, `state`, `zip_code`, `CustomerId`, `StoreId`) VALUES ('32 River Rd', 'Bethesda', 'MD', '32445', '3', '4');

INSERT INTO `tucker_db`.`ProductDescriptions` (`productName`, `description`) VALUES ('cucumber', 'vegetable greeen');
INSERT INTO `tucker_db`.`ProductDescriptions` (`productName`, `description`) VALUES ('carrot', 'vegetable');


INSERT INTO `tucker_db`.`Products` (`price`, `inStock`, `discounted`, `discountedPrice`, `ProductDescriptionId`, `StoreId`) VALUES (5, 200, true,2, 1,1);
INSERT INTO `tucker_db`.`products` (`price`, `inStock`, `discounted`, `discountedPrice`, `ProductDescriptionId`, `StoreId`) VALUES (3, 134, false, 0, 2, 1);


INSERT INTO `tucker_db`.`buckets` (`CustomerId`, `ProductId`) VALUES ('1', '1');
INSERT INTO `tucker_db`.`buckets` (`CustomerId`, `ProductId`) VALUES ('1', '2');





INSERT INTO `ProductDescriptions` (`id`, `productName`, `description`) VALUES 	(1, 'Cucumber', 'cucumber'), 	(2, 'Carrots', 'carrots'), 	(3, 'Bananas', 'banana'), 	(4, 'Filet Mignon', 'filet-mignon'), 	(5, 'Hot Dogs', 'hotdog'), 	(6, 'Whole Chicken', 'chicken'), 	(7, 'Rib Eye Steak', 'rib-eye'), 	(8, 'Avocados from Mexico', 'avocado');

INSERT INTO `Products` (`id`, `price`, `inStock`, `discounted`, `discountedPrice`, `ProductDescriptionId`, `StoreId`) VALUES 	(3, 2, 5, 0, 0, 3, 1), 	(4, 5, 200, 1, 2, 1, 1), 	(5, 1, 134, 0, 0, 2, 1), 	(6, 10, 100, 0, 0, 4, 1), 	(7, 5, 1000, 0, 0, 5, 1), 	(8, 4, 288, 0, 0, 6, 1), 	(9, 20, 90, 0, 0, 7, 1), 	(10, 2, 20, 0, 0, 8, 1);