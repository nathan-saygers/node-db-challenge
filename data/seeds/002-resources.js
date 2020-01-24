
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1, 
          resource_name: '1F Conference Room', 
          resource_description: 'First floor conference room on SE side of building 1'
        }, 
        {
          id: 2, 
          resource_name: 'CISCO Conferincing Platform', 
          resource_description: 'Dual panel conferencing platform with motion tracking cameras'
        }, 
        {
          id: 3, 
          resource_name: 'Rad souped up DUMPTRUCK', 
          resource_description: 'MASSIVE and surprisingly fast dumptruck with cool flame decals on either side'
        }, 
      ]);
    });
};
