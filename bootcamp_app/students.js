const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const defaultLimit = 5;
const args = process.argv.slice(2,4);
const cohort = args[0];
const limit = args[1] || defaultLimit;
const values = [`%${cohort}%`, limit];
const queryString = `
SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

// request to query students with specified cohort name and where results are limited to specified limit
pool.query(queryString, values)
.then(response => {
  response.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch(error => console.log('query error:', error.stack));