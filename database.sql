-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "first_name" VARCHAR(1000)NOT NULL, 
    "last_name" VARCHAR(1000) NOT NULL
);


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR(1000)NOT NULL, 
    "last_name" VARCHAR(1000)NOT NULL,
    "access_level" INTEGER DEFAULT 0
);

CREATE TABLE "userfriends" (
	"id" SERIAL PRIMARY KEY,
	"friend_id" INTEGER REFERENCES "user" ON DELETE CASCADE,
	"user_id" INTEGER REFERENCES "user" ON DELETE CASCADE
	);


CREATE TABLE "calendar" (
	"id" SERIAL PRIMARY KEY,
    "Date" DATE,
    "challenge_id" INTEGER REFERENCES "challenge" ON DELETE CASCADE,
    "user_id" INTEGER REFERENCES "user" ON DELETE CASCADE
);

DROP TABLE "calendar";


CREATE TABLE challenge (
    "id" SERIAL PRIMARY KEY,
    "challenge_name" VARCHAR(1000),
    "goal_statment" VARCHAR(3000),
    "measureable_goal" INTEGER,
    "wager" VARCHAR(1000),
    "notes" VARCHAR(2000),
    "dates" daterange,
    "challenger" VARCHAR(1000) DEFAULT 'self',
    "user_id" INTEGER REFERENCES  "user" ON DELETE CASCADE
);

DROP TABLE "challenge";

CREATE TABLE "badges" (
	"id" SERIAL PRIMARY KEY,
	"badge_name" VARCHAR(100),
	"badge_url" VARCHAR(200),
    "username_id" INTEGER REFERENCES  "user" ON DELETE CASCADE,
    "challenge_id" INTEGER REFERENCES "challenge" ON DELETE CASCADE

);




--Challenges Table (Challenge)


INSERT INTO challenge ("challenge_name", "goal_Statment", "measureable_goal", "wager", "notes", "dates", "username_id")
VALUES 
    ('Exercise Challenge', 'To exercise 3 times a week', 3, 'Lose 5 pounds', 'Remember to warm up before starting', '[2024-06-01, 2024-06-30]', 1),
    ('Reading Challenge', 'To read 10 books in 6 months', 10, 'Read a new genre', 'Keep track of progress in a reading log', '[2024-07-01, 2024-12-31]', 2),
    ('Coding Challenge', 'To complete 50 coding exercises', 50, 'Learn a new programming language', 'Join coding forums for support', '[2024-06-15, 2024-08-15]', 3);











