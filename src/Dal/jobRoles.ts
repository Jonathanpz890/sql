import { pool } from "./database";

const jobRoleDBServices = {
    getJobRoles: async () => (await pool.query('SELECT job_placements.job_roles.id, job_placements.job_roles.created_at, job_placements.job_roles.updated_at, job_placements.job_roles.is_deleted, job_id, role_id, job_placements.jobs.title as job_title, job_placements.roles.title as role_title FROM job_placements.job_roles INNER JOIN job_placements.jobs ON job_placements.job_roles.job_id=job_placements.jobs.id INNER JOIN job_placements.roles ON job_placements.job_roles.role_id=job_placements.roles.id')).rows
}

export default jobRoleDBServices;