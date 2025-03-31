CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`nickname` text NOT NULL,
	`jmeno` text NOT NULL,
	`prijmeni` text NOT NULL,
	`datum_nar` date NOT NULL,
	`password_hash` text NOT NULL,
	`token` text,
	`token_expires` text,
	`is_email_verified` integer NOT NULL,
	`is_online` integer NOT NULL,
	`created_at` text NOT NULL,
	`update_at` text NOT NULL,
	`profile_image` text NOT NULL
);
