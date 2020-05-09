const usersQueries = {};

usersQueries.getUser = "select * from [User] where Id = @id";

usersQueries.getUsersByType =
  "select * from [User] where UserTypeId = @userTypeId";

usersQueries.getUsersByService =
  "SELECT u.* FROM [User] u INNER JOIN ServiceUserXRef su ON ( u.Id = su.UserId ) WHERE su.ServiceId = @serviceId";

usersQueries.createUser =
  "INSERT dbo.[User] (Firstname,Surname,Email,[Password],UserTypeId) VALUES (@firstname,@surname,@email,@password,@userTypeId)";

usersQueries.deleteUser = "DELETE dbo.[User] WHERE Id = @id";

module.exports = usersQueries;
