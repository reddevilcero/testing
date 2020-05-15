const authQueries = {};

authQueries.login =
  "select * from [User] where Email = @email AND [Password] = @pwd";

module.exports = authQueries;
