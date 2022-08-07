import { pool } from './database';

const jobDBServices = {
    getJobs: async () =>  (await pool.query<{
        id: number, 
        created_at: Date,
        updated_at: Date,
        is_deleted: boolean,
        title: string
    }>('SELECT * FROM job_placements.jobs')).rows
}

export default jobDBServices;