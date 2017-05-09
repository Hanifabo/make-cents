CREATE  DATABASE `makecents`;
USE makecents;


USE makecents;
drop table Spendings;
drop table Groups;
drop table Users;

USE makecents;
select * from Users;

USE makecents;
INSERT INTO Users(id,name,email,phoneNumber,createdAt,updatedAt)
VALUES (1,"hanfi","hanifabo@gmail.com", 1234567890,'2010-01-01','2010-01-02'),
(2,"Charles","hanifabo@gmail.com", 1234567890,'2010-01-01','2010-01-02'),
(3,"Benjamin","hanifabo@gmail.com", 1234567890,'2010-01-01','2010-01-02'),
(4,"Daniel","hanifabo@gmail.com", 1234567890,'2010-01-01','2010-01-02'),
(5,"Joseph","hanifabo@gmail.com", 1234567890,'2010-01-01','2010-01-02'),
(6,"Ebenezer","hanifabo@gmail.com", 1234567890,'2010-01-01','2010-01-02');
     
       
USE makecents;
select * from Spendings;

INSERT INTO Spendings(id,GroupId,groceries,gas,leisure,totalSpendings,createdAt,updatedAt)
VALUES (1,1,43,656, 65,754,'2010-01-01','2010-01-02'),
(2,2,4,16, 65,74,'2010-01-01','2010-01-02'),
(3,3,43,5, 65,754,'2010-01-01','2010-01-02'),
(4,4,43,60, 65,75,'2010-01-01','2010-01-02'),
(5,5,43,156, 65,54,'2010-01-01','2010-01-02'),
(6,6,43,60, 65,47,'2010-01-01','2010-01-02');

USE makecents;
select * from Groups;

USE makecents;
INSERT INTO Groups(id,UserId,groupName,groupImage,groupTheme,createdAt,updatedAt)
VALUES (1,1,"hanfi","monringGroup", "doing it right",'2010-01-01','2010-01-02'),
(2,1,"dayGroup","dayGroup oh", "wall box",'2010-01-01','2010-01-02'),
(3,1,"niteGroup","all right", "coing gangster",'2010-01-01','2010-01-02'),
(4,1,"morningGroup","dry pic", "common sense",'2010-01-01','2010-01-02'),
(5,1,"allGroup","here again", "saving big",'2010-01-01','2010-01-02'),
(6,1,"allGroup","is the grou", "speed man",'2010-01-01','2010-01-02')
       
       