const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];
const defaultCohort = 'JUL02'

pool.query(`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = '${cohort || defaultCohort}'
ORDER BY teacher;
`)
.then(response => {
  response.rows.forEach(teacher => {
    console.log((`${teacher.cohort}: ${teacher.teacher}`));
  })
})
.catch(error => console.log('query error:', error.stack));