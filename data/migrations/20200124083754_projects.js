
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('project_name', 128)
      .unique()
      .notNullable();
    tbl.text('project_description', 255)
    tbl.boolean('project_complete')
      .notNullable()
      .defaultTo(false);
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.string('resource_name', 128)
      .unique()
      .notNullable();
    tbl.text('resource_description', 255);
  })
  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.string('task_name', 128)
      .unique()
      .notNullable();
    tbl.text('task_description', 255)
      .notNullable();
    tbl.text('task_notes', 255);
    tbl.boolean('task_complete')
      .notNullable()
      .defaultTo(false);
  })
  .createTable('projects_resources', tbl => {
    tbl.increments();
    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl.integer('resources_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
