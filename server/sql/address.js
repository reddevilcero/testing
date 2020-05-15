const userAddressQueries = {};

userAddressQueries.getUserAddress =
  "select * from UserAddress where UserId = @userId";

userAddressQueries.insertUserAddress = `insert dbo.UserAddress ( UserId, Alias, FirstLineAddress, SecondLineAddress, ThirdLineAddress, Postcode, County, Country )
                                        values (@userId, @alias, @firstLineAddress, @secondLineAddress, @thirdLineAddress, @postcode, @county, @country)`;

userAddressQueries.deleteUserAddress = "delete dbo.UserAddress where id =@id";
module.exports = userAddressQueries;
