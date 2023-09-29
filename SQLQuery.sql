USE lcs;

CREATE TABLE IF NOT EXISTS Class(
	classID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	className varchar(255)
);

CREATE TABLE IF NOT EXISTS Users(
	userID int NOT NULL auto_increment PRIMARY KEY,
	googleID VARCHAR(255) NOT NULL,
	username VARCHAR(255) UNIQUE,
	fname VARCHAR(255),
	lname VARCHAR(255),
	profilePicture VARCHAR(255),
	classID INT,
	FOREIGN KEY (classID) REFERENCES Class (classID)
);

CREATE TABLE IF NOT EXISTS Post(
	postID INT NOT NULL auto_increment PRIMARY KEY,
	title VARCHAR(255),
	content TEXT,
	published DATETIME,
	userID INT,
	FOREIGN KEY (userID) REFERENCES Users(userID)
);

CREATE TABLE IF NOT EXISTS Comment(
	commentID INT NOT NULL auto_increment PRIMARY KEY,
	content TEXT,
	published DATETIME,
	userID INT,
	postID INT,
	FOREIGN KEY (userID) REFERENCES Users(userID),
	FOREIGN KEY (postID) REFERENCES Post(postID)
);