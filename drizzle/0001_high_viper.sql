CREATE TABLE `blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`titleEn` varchar(500) NOT NULL,
	`titleAr` varchar(500) NOT NULL,
	`slugEn` varchar(500) NOT NULL,
	`slugAr` varchar(500) NOT NULL,
	`contentEn` text NOT NULL,
	`contentAr` text NOT NULL,
	`descriptionEn` varchar(500),
	`descriptionAr` varchar(500),
	`category` varchar(100) NOT NULL,
	`image` varchar(500),
	`published` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_posts_slugEn_unique` UNIQUE(`slugEn`),
	CONSTRAINT `blog_posts_slugAr_unique` UNIQUE(`slugAr`)
);
--> statement-breakpoint
CREATE TABLE `contact_messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`subject` varchar(500) NOT NULL,
	`message` text NOT NULL,
	`status` enum('new','read','replied') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contact_messages_id` PRIMARY KEY(`id`)
);
