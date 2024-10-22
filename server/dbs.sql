CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `email` string,
  `fullname` string,
  `phone` string COMMENT 'để number ko lưu số không được',
  `emailVerified` bool,
  `phoneVerìfied` bool,
  `password` string,
  `avatar` string,
  `balance` bigint,
  `score` integer COMMENT 'điểm tích lũy/ hoạt động',
  `resetPwToken` string COMMENT 'xác minh hợp lệ',
  `resetPwExpiry` timestamp COMMENT 'thời gian hợp lệ',
  `idPricing` integer
);

CREATE TABLE `posts` (
  `id` integer,
  `idPost` string COMMENT 'kiểu uuid',
  `title` string,
  `address` string,
  `province` string,
  `district` string,
  `ward` string,
  `avgStar` integer,
  `price` bigint COMMENT 'tiền tỉ ko thể integer',
  `size` integer,
  `description` text COMMENT 'kiểu rich text / markdown',
  `floor` integer COMMENT 'số tầng',
  `bedroom` integer,
  `bathroom` integer,
  `isFurniture` bool,
  `listingType` ENUM ('Bán', 'Cho thuê'),
  `propertyType` ENUM ('Căn hộ chung cư', 'Nhà mặt phố', 'Nhà riêng', 'Nhà phố thương mại', 'Biệt thự', 'Đất nền', 'Bán đất', 'Trang trại', 'Khu nghỉ dưỡng', 'Kho', 'Nhà xưởng', 'Khác') COMMENT 'loại đất',
  `direction` ENUM ('Đống - Bắc', 'Tây - Nam', 'Đông - Nam', 'Tây - Bắc', 'Đông', 'Tây', 'Nam', 'Bắc') COMMENT 'hướng nhà',
  `balonDirection` ENUM ('Đống - Bắc', 'Tây - Nam', 'Đông - Nam', 'Tây - Bắc', 'Đông', 'Tây', 'Nam', 'Bắc') COMMENT 'hướng ban công',
  `verified` bool COMMENT 'tính xác thực tin cậy nôi dung đăng ',
  `expiredDate` timestamp COMMENT 'ngày hết hạng tin đăng phụ thuộc theo level của tk',
  `expiredPost` timestamp COMMENT 'đẩy tin',
  `status` ENUM ('Còn trống', 'Đang đàm phán', 'Đang bàn giao'),
  `idUser` integer
);

CREATE TABLE `Wishlist` (
  `id` integer PRIMARY KEY,
  `idPost` integer,
  `idUser` integer
);

CREATE TABLE `comments` (
  `id` integer PRIMARY KEY,
  `idPost` integer,
  `idUser` integer,
  `content` text,
  `idParent` integer COMMENT 'cmt lồng nhau'
);

CREATE TABLE `ratings` (
  `id` integer PRIMARY KEY,
  `idPost` integer,
  `idUser` integer,
  `content` text,
  `star` integer
);

CREATE TABLE `pricings` (
  `id` integer PRIMARY KEY,
  `name` string,
  `isDisplayImmedialy` bool COMMENT 'hiển thị liền hay hông',
  `isShowDirection` bool COMMENT 'hiển thị ttin nhiều hơn',
  `priority` integer COMMENT 'mức độ ưu tiên',
  `requireScore` integer COMMENT 'bao nhiêu điểm để lên lv',
  `price` integer COMMENT 'giá nâng cấp bằng tiền',
  `expriredDay` integer COMMENT 'thời gian hết hạng'
);

CREATE TABLE `tags` (
  `id` integer PRIMARY KEY,
  `tag` string
);

CREATE TABLE `tags_posts` (
  `id` integer PRIMARY KEY,
  `idPost` integer,
  `idTag` integer
);

ALTER TABLE `users` ADD FOREIGN KEY (`idPricing`) REFERENCES `pricings` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `posts` (`idUser`);

ALTER TABLE `Wishlist` ADD FOREIGN KEY (`idPost`) REFERENCES `posts` (`id`);

ALTER TABLE `Wishlist` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`idPost`) REFERENCES `posts` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `ratings` ADD FOREIGN KEY (`idPost`) REFERENCES `posts` (`id`);

ALTER TABLE `ratings` ADD FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

ALTER TABLE `tags_posts` ADD FOREIGN KEY (`idPost`) REFERENCES `posts` (`id`);

ALTER TABLE `tags_posts` ADD FOREIGN KEY (`idTag`) REFERENCES `tags` (`id`);
