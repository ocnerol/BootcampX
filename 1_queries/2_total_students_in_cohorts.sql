SELECT COUNT(id)
FROM students
WHERE cohort_id IN (1,2,3);

/* original
SELECT COUNT(*)
FROM students
WHERE cohort_id <= 3;
*/