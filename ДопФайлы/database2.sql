--create database cafe2;
--go
use cafe2;

drop table if exists ����������;
drop table if exists ����_����;
drop table if exists ����_�������;
drop table if exists ����_������;
drop table if exists ����;
drop table if exists �������;
drop table if exists ����;
drop table if exists ������;
drop table if exists ��������;
drop table if exists ����;
drop table if exists ������������;

create table ������������(
id int not null primary key identity,
email nvarchar(300) not null,
password nvarchar(300) not null
);
go

create table ����(
id int not null primary key identity,
title nvarchar(300) not null,
address nvarchar(300) not null
);
go

create table ��������(
id int not null primary key identity,
userId int not null references ������������(id),
cafeId int not null references ����(id),
title nvarchar(300) not null,
roleTitle nvarchar(300) not null,
salary money not null
);
go

create table ������(
id int not null primary key identity,
userId int not null references ������������(id),
cafeId int not null references ����(id),
mark int not null default 0
);
go

create table ����(
id int not null primary key identity,
title nvarchar(300) not null,
markTotal int not null default 100
);
go

create table �������(
id int not null primary key identity,
title nvarchar(300) not null,
exercise nvarchar(max) not null,
mark int not null default 10
);
go

create table ����(
id int not null primary key identity,
title nvarchar(300) not null,
lesson nvarchar(max) not null,
lesson_description nvarchar(max)
);
go

create table ����_����(
courseId int not null references ����(id),
lessonId int not null references ����(id)
);
go

create table ����_�������(
courseId int not null references ����(id),
exerciseId int not null references �������(id)
);
go

create table ����_������(
courseId int not null references ����(id),
traineeId int not null references ������(id)
);
go

create table ����������(
id int not null primary key identity,
userId int not null references ������������(id),
managerId int not null references ��������(id),
mark int not null
);
go