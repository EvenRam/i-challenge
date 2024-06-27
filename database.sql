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


CREATE TABLE "userfriends" (
	"id" SERIAL PRIMARY KEY,
	"friend_id" INTEGER REFERENCES "user" ON DELETE CASCADE,
	"user_id" INTEGER REFERENCES "user" ON DELETE CASCADE
	);


CREATE TABLE "calendar" (
	"id" SERIAL PRIMARY KEY,
    "date" DATE,
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
    "dates" DATERANGE,
    "challenger" VARCHAR(1000) DEFAULT 'self',
    "username_id" INTEGER REFERENCES  "user" ON DELETE CASCADE
);

DROP TABLE "challenge";

CREATE TABLE "badges" (
	"id"SERIAL PRIMARY KEY,
	"badge_name" VARCHAR(100),
	"badge_url" VARCHAR(200),
    "username_id" INTEGER REFERENCES  "user" ON DELETE CASCADE,
    "challenge_id" INTEGER REFERENCES "challenge" ON DELETE CASCADE

);

DROP TABLE "badges";


--Challenges Table (Challenge)


INSERT INTO challenge ("challenge_name", "goal_Statment", "measureable_goal", "wager", "notes", "dates", "username_id")
VALUES 
    ('Exercise Challenge', 'To exercise 3 times a week', 3, 'Lose 5 pounds', 'Remember to warm up before starting', '[2024-06-01, 2024-06-30]', 1),
    ('Reading Challenge', 'To read 10 books in 6 months', 10, 'Read a new genre', 'Keep track of progress in a reading log', '[2024-07-01, 2024-12-31]', 2),
    ('Coding Challenge', 'To complete 50 coding exercises', 50, 'Learn a new programming language', 'Join coding forums for support', '[2024-06-15, 2024-08-15]', 3);


--Badges Table (Badges)


INSERT INTO "badges" ("badge_name","badge_url", "username_id","challenge_id")
VALUES
    ( '1st Challenge Compeleted','https://example.com/first-place-badge.png', 1,1),
    ('2nd Challenge Completed', 'https://example.com/achievement-badge.png',2,2),
    ('2nd Challenge Completed', 'https://example.com/completion-badge.png',3,3);

--User Friends Table (user_friends)
INSERT INTO "userfriends" ("friend_id", "user_id")
VALUES
    (2, 1),  -- John Doe (user_id 1) is friends with Jane Smith (user_id 2)
    (1, 3);  -- Bob Jones (user_id 3) is friends with John Doe (user_id 1)


--Calendar Table (Calendar)
INSERT INTO "calendar" ("Date","challenge_id", "user_id")
VALUES
    ('06-01-2024', 1, 1),  -- John Doe (user_id 1) has Fitness Challenge (challenge_id 1) on 2024-06-01
    ('07-10-2024', 2, 2),  -- Jane Smith (user_id 2) has Reading Challenge (challenge_id 2) on 2024-07-10
    ('06-15-2024', 3, 3);  -- Bob Jones (user_id 3) has Coding Challenge (challenge_id 3) on 2024-06-15

