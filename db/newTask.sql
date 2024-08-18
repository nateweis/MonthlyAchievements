INSERT INTO tasks (
    id, title, pg, priority, count, current_progress, max_progress, measurement, type, status, date_created, date_updated, user_id
) 
VALUES (
    ${id}, ${title}, ${pg}, ${priority}, ${count}, ${current_progress}, ${max_progress}, ${measurement}, ${type}, ${status}, now(), now(), ${user_id}
);