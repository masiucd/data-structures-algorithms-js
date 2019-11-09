select title , released_year
from books
where released_year >= 2004 && released_year
<= 2015;


select title , released_year
from books
where released_year BETWEEN 2004 AND released_year
<= 2015;

select title , released_year
from books
where released_year NOT BETWEEN 2004 AND released_year
<= 2015 order by title;


SELECT title, released_year
FROM books
WHERE released_year >= 2004 && released_year
<= 2015;

SELECT title, released_year
FROM books
WHERE released_year BETWEEN 2004 AND 2015;

SELECT title, released_year
FROM books
WHERE released_year NOT BETWEEN 2004 AND 2015;

SELECT CAST('2017-05-02' AS DATETIME);

show databases;

use new_testing_db;

SELECT name, birthdt
FROM people
WHERE birthdt BETWEEN '1980-01-01' AND '2000-01-01';

SELECT
  name,
  birthdt
FROM people
WHERE
    birthdt BETWEEN CAST('1980-01-01' AS DATETIME)
    AND CAST('2000-01-01' AS DATETIME);