exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "bob",
          password: "bobspassword",
          department: "finance",
        },
        {
          id: 2,
          username: "joe",
          password: "joespassword",
          department: "sales",
        },
        {
          id: 3,
          username: "sam",
          password: "samspassword",
          department: "sales",
        },
      ]);
    });
};
