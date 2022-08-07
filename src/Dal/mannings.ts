import { Request, Response } from 'express';
import { pool } from './database';

const manningDBServices = {
    createManning: async (name: string, startDate: Date, jobRoleId: number) => {
        console.log(jobRoleId)
        return await pool.query('INSERT INTO job_placements.mannings (name, start_date, job_role_id) VALUES ($1, $2, $3) RETURNING *', [name, startDate, jobRoleId])
    },
    getMannings: async () => {
        return (await pool.query('SELECT * FROM job_placements.mannings')).rows;
    }, 
    deleteManning: async (manningId: number) => {
        return await pool.query('DELETE FROM job_placements.mannings WHERE id=($1)', [manningId])
    }
}

export default manningDBServices;