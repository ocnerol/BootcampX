SELECT SUM(assignment_submissions.duration) AS total_duration
FROM cohorts
JOIN students ON cohort_id = cohorts.id
JOIN assignment_submissions ON students.id = student_id
WHERE cohorts.name = 'FEB12';