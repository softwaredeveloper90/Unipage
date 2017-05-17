-- UP

INSERT INTO Courses (id,  name, description, entry_requirements, location, date, duration, mode_of_study, price) VALUES (1, "Textiles","Textiles course for beginners","No previous experience required","Swoon University", "1st June 2017", "2 days", "Full Time", "£150");     

INSERT INTO Courses (id,  name, description, entry_requirements, location, date, duration, mode_of_study, price) VALUES (2, "Fine Art","Fine Art course for advanced painters","Previous experience in painting pictures","Swoon University", "21st June 2017", "3 days", "Full Time", "£250"); 


-- Down

DELETE FROM Courses WHERE id IN (1,2);
