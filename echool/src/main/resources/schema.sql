DROP TABLE IF EXISTS  groups, students, logins;

CREATE TABLE groups
(
    id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    group_name VARCHAR(255)
);

CREATE TABLE students
(
    id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255),
    last_name  VARCHAR(255),
    gpa        DOUBLE
);


INSERT INTO groups(group_name) VALUES ( 'ITSE-1903'), ('ITSE-1907');
INSERT INTO students(first_name, last_name, gpa) VALUES
      (  'Temirlan', 'Baktybek', 2.86),
      (  'Gani', 'Sagadat', 3.02),
      (  'Aruzhan', 'Yusupova', 3.1),
      (  'Bakdaulet', 'Tuesynbek', 2.3),
        ( 'Sanzhar', 'Dautkazy', 2.3);


CREATE TABLE logins(
                       user_login VARCHAR(255) PRIMARY KEY,
                       user_password VARCHAR(400),
                       enabled TINYINT NOT NULL DEFAULT 1,
                       role VARCHAR(255)
);


INSERT INTO logins(user_login, user_password, enabled, role) VALUES ( 'tima', '$2a$12$qjAehCA6Nm3gs8BtiQVY/.n/QuSDsijbM7OUkldYbVjb9g7ig4jRS', 1, 'sss');
