CREATE TABLE
  `transactions` (
    `id` integer not null primary key autoincrement,
    `type` varchar(255) not null,
    `amount` DECIMAL not null,
    `txn_date` DATETIME not null
  )