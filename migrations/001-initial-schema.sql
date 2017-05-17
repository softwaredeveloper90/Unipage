-- Up

CREATE TABLE Courses (id INTEGER PRIMARY KEY, name TEXT, description TEXT, entry_requirements TEXT, location TEXT, date TEXT, duration TEXT, mode_of_study TEXT, price TEXT);

-- Down

DROP TABLE Courses;