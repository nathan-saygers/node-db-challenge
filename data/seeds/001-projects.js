
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          project_name: '02 Data Migration', 
          project_description: 'Transferring data from our old servers in blah blah blah', 
          project_complete: false},
        {
          id: 2, 
          project_name: 'Seabring Client Onboarding', 
          project_description: 'Familiarizing Seabring llc with our workflows and blah blah blah', 
          project_complete: false},
        {
          id: 3, 
          project_name: 'DumpsterTruck Bus Jump', 
          project_description: 'Doin like a sick huge jump over those busses down by the junkyard and blah blah blah', 
          project_complete: false}
      ]);
};
