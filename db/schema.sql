drop database if exists things_db;

create database things_db;

use things_db;

create table thing_tb(
	id int auto_increment primary key,
    name varchar(30) not null,
    devoured bool
);