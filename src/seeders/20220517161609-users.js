module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('users', [
      {
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: 'adminsecreto', // secret_admin
      },
      {
        username: 'User',
        role: 'user',
        email: 'user@user.com',
        password: 'usersecreto', // secret_user
      },
      {
        username: 'yuri',
        role: 'user',
        email: 'yuri@user.com',
        password: 'yurigarrido', // secret_user
      },
    ], {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
