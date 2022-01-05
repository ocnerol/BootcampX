-- answer given on Compass which is simpler
SELECT cohorts.name, AVG(assistance_requests.completed_at - assistance_requests.created_at) AS average_assistance_time
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC
LIMIT 1;



-- original implementation (works and valid but more complicated than necessary)
-- SELECT cohorts.name, AVG(assistance_requests.completed_at - assistance_requests.created_at) AS average_assistance_time
-- FROM assistance_requests
-- JOIN students ON students.id = student_id
-- JOIN cohorts ON cohorts.id = cohort_id
-- GROUP BY cohorts.name
-- HAVING AVG(assistance_requests.completed_at - assistance_requests.created_at) >= ALL(SELECT AVG(assistance_requests.completed_at - assistance_requests.created_at) AS average_assistance_time
--                                                                                       FROM assistance_requests
--                                                                                       JOIN students ON students.id = student_id
--                                                                                       JOIN cohorts ON cohorts.id = cohort_id
--                                                                                       GROUP BY cohorts.name
--                                                                                       ORDER BY average_assistance_time);