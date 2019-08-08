exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { name: 'Dr. Rumack' }, // 1
    { name: 'Dr.Evil' }, // 2
    { name: 'Peter Clemenza' }, // 3
    { name: 'Walter Sobchak ' }, // 4
    { name: 'Broomhilda von Shaft' }, // 5
    { name: 'Indiana Jones ' }, // 6
    { name: 'Snake Plissken ' }, // 7
    { name: 'Buckaroo Banzai' }, // 8
    { name: 'Frank Bullitt' }, // 9
  ]);
};
