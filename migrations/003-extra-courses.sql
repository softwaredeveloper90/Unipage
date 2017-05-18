-- UP

INSERT INTO Courses (id,  name, description, entry_requirements, location, date, duration, mode_of_study, price) VALUES (3, "Potato Carving","One Potato, Two Potato, Three Potato, FOUR! Come and learn how to cut up them potatoes real good!!","No previous experience required","Swoon University", "1st July 2017", "2 days", "Full Time", "£15");     

INSERT INTO Courses (id,  name, description, entry_requirements, location, date, duration, mode_of_study, price) VALUES (4, "Graffiti","Graffiti course for advanced sprayers","Previous experience in tagging walls","Swoon University", "21st August 2017", "3 days", "Full Time", "£250"); 


-- Down

DELETE FROM Courses WHERE id IN (3,4);
