import { pool } from './database';

const roleDBServices = {
    getRoles: async () =>  (await pool.query<{
        id: number, 
        created_at: Date,
        updated_at: Date,
        is_deleted: boolean,
        title: string
    }>('SELECT * FROM job_placements.roles')).rows
}

export default roleDBServices;