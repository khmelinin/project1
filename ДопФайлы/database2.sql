--create database cafe2;
--go
use cafe2;

drop table if exists Аттестация;
drop table if exists Курс_Урок;
drop table if exists Курс_Задание;
drop table if exists Курс_Стажер;
drop table if exists Урок;
drop table if exists Задание;
drop table if exists Курс;
drop table if exists Стажер;
drop table if exists Работник;
drop table if exists Кафе;
drop table if exists Пользователь;

create table Пользователь(
id int not null primary key identity,
email nvarchar(300) not null,
password nvarchar(300) not null
);
go

create table Кафе(
id int not null primary key identity,
title nvarchar(300) not null,
address nvarchar(300) not null
);
go

create table Работник(
id int not null primary key identity,
userId int not null references Пользователь(id),
cafeId int not null references Кафе(id),
title nvarchar(300) not null,
roleTitle nvarchar(300) not null,
salary money not null
);
go

create table Стажер(
id int not null primary key identity,
userId int not null references Пользователь(id),
cafeId int not null references Кафе(id),
mark int not null default 0
);
go

create table Курс(
id int not null primary key identity,
title nvarchar(300) not null,
markTotal int not null default 100
);
go

create table Задание(
id int not null primary key identity,
title nvarchar(300) not null,
exercise nvarchar(max) not null,
mark int not null default 10
);
go

create table Урок(
id int not null primary key identity,
title nvarchar(300) not null,
lesson nvarchar(max) not null,
lesson_description nvarchar(max)
);
go

create table Курс_Урок(
courseId int not null references Курс(id),
lessonId int not null references Урок(id)
);
go

create table Курс_Задание(
courseId int not null references Курс(id),
exerciseId int not null references Задание(id)
);
go

create table Курс_Стажер(
courseId int not null references Курс(id),
traineeId int not null references Стажер(id)
);
go

create table Аттестация(
id int not null primary key identity,
userId int not null references Пользователь(id),
managerId int not null references Работник(id),
mark int not null
);
go