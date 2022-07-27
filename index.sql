CREATE SCHEMA job_placements;

CREATE FUNCTION trigger_set_timestamp()
RETURN TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TABLE job_placements.jobs (
    id PRIMARY KEY SERIAL,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at DATE NOT NULL DEFAULT NOW(),
    is_deleted BOOLEAN NOT NULL DEAFULT FALSE,

    title VARCHAR(255) NOT NULL
)

CREATE TRIGGER job_placements.set_timestamp
BEFORE UPDATE
ON job_placements.jobs
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp;

CREATE TABLE job_placements.roles (
    id PRIMARY KEY SERIAL,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at DATE NOT NULL DEFAULT NOW(),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,

    title VARCHAR(255) NOT NULL
)

CREATE TRIGGER set_timestamp
BEFORE UPDATE
ON job_placements.roles
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp;

CREATE TABLE job_placements.job_roles (
    id PRIMARY KEY SERIAL,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at DATE NOT NULL DEFAULT NOW(),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,

    job_id FOREIGN KEY NOT NULL,
    role_id FOREIGN KEY NOT NULL
)

CREATE TRIGGER set_timestamp
BEFORE UPDATE
ON job_placements.job_roles
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp;

CREATE TABLE job_placements.mannings (
    id PRIMARY KEY SERIAL,
    created_at DATE NOT NULL DEFAULT NOW(),
    updated_at DATE NOT NULL DEFAULT NOW(),
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,

    name VARCHAR(255),
    start_date DATE NOT NULL,
    job_role_id FOREIGN KEY NOT NULL
)

CREATE TRIGGER set_timestamp
BEFORE UPDATE
ON job_placements.mannings
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp;
