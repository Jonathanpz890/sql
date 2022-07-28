CREATE SCHEMA job_placements;

CREATE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE job_placements.jobs (
    id SERIAL PRIMARY KEY,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at DATE NOT NULL DEFAULT NOW(),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,

    title VARCHAR(255) NOT NULL
);

CREATE TRIGGER set_timestamp_jobs
BEFORE UPDATE
ON job_placements.jobs
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE job_placements.roles (
    id SERIAL PRIMARY KEY,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at DATE NOT NULL DEFAULT NOW(),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,

    title VARCHAR(255) NOT NULL
);

CREATE TRIGGER set_timestamp_roles
BEFORE UPDATE
ON job_placements.roles
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE job_placements.job_roles (
    id SERIAL PRIMARY KEY,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at DATE NOT NULL DEFAULT NOW(),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,

    CONSTRAINT job_id FOREIGN KEY(id) REFERENCES jobs(id),
    CONSTRAINT role_id FOREIGN KEY(id) REFERENCES roles(id)
);

CREATE TRIGGER set_timestamp_job_roles
BEFORE UPDATE
ON job_placements.job_roles
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE job_placements.mannings (
    id SERIAL PRIMARY KEY,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at DATE NOT NULL DEFAULT NOW(),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,

    name VARCHAR(255),
    start_date DATE NOT NULL,
    CONSTRAINT job_role_id FOREIGN KEY (id) REFERENCES job_placements.job_roles(id)
);

CREATE TRIGGER set_timestamp_mannings
BEFORE UPDATE
ON job_placements.mannings
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
