
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1, 
          project_id: 3,
          task_description: 'Sneak into the junk yard late at night',
          task_notes: 'Watch out for famed guard dog Toothless Eddie',
          task_complete: false,
        }, 
        {
          id: 2, 
          project_id: 3,
          task_description: 'Rev up that SICK dumptruck',
          task_notes: 'If we blow the engine I dont even care its so cool',
          task_complete: false,
        }, 
        {
          id: 3, 
          project_id: 3,
          task_description: 'Get maximum lift off the ramp we brought',
          task_notes: '45 degrees sucker',
          task_complete: false,
        },
      ]);
};
