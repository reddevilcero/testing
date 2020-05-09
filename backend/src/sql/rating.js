const ratingQueries = {};

ratingQueries.getUserRaitings = `SELECT  r.Id
, r.Rating
, r.Comment
, r.CreatedDate
, r.RatedByUserId
, u.Firstname + ' ' + u.Surname RatedByUser
FROM    dbo.ServiceRating r
INNER JOIN dbo.[User] u ON ( r. RatedByUserId = u.Id )
WHERE   r.UserRatedId = @userid`;

module.exports = ratingQueries;
