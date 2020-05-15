const bookingQueries = {};

bookingQueries.getMonthlyBookings = `SELECT  b.Id
, b.BookerId ClientId
, b.WorkerId
, c.Firstname + ' ' + c.Surname Client
, w.Firstname + ' ' + w.Surname Worker
, b.BookingDate
, b.BookingStateId
, s.Title
FROM    dbo.Booking b
INNER JOIN dbo.[User] c ON ( b.BookerId = c.Id )
INNER JOIN dbo.[User] w ON ( b.WorkerId = w.Id )
INNER JOIN dbo.[BookingState] s ON ( b.BookingStateId = s.Id )
WHERE (b.BookerId = @userid OR b.WorkerId = @userid)
AND YEAR(b.BookingDate) = @year AND MONTH(b.BookingDate) = @month`;

bookingQueries.getBooking = `SELECT  b.Id
, b.BookerId ClientId
, b.WorkerId
, c.Firstname + ' ' + c.Surname Client
, w.Firstname + ' ' + w.Surname Worker
, b.BookingDate
, b.BookingStateId
, s.Title [State]
FROM    dbo.Booking b
INNER JOIN dbo.[User] c ON ( b.BookerId = c.Id )
INNER JOIN dbo.[User] w ON ( b.WorkerId = w.Id )
INNER JOIN dbo.[BookingState] s ON ( b.BookingStateId = s.Id )
WHERE b.Id = @id`;

bookingQueries.getBookingTasks = `SELECT  t.Id, t.Notes, t.CreatedDate
FROM    dbo.BookingTasks t
WHERE t.BookingId = @bookingid`;

bookingQueries.createBooking = `INSERT dbo.Booking ( BookerId, WorkerId, BookingDate, BookingStateId, CreatedDate, ModifiedDate )
VALUES (@bookerid, @workerid, @bookingdate, @stateid, @createdate, @modifiedate)
SELECT SCOPE_IDENTITY() BookingId`;

bookingQueries.createBookingTasks = `INSERT dbo.BookingTasks ( BookingId, Notes, CreatedDate)
VALUES (@bookingid, @notes, @createdate)`;

bookingQueries.updateBookingState = `UPDATE dbo.Booking SET BookingStateId = @stateid WHERE Id = @id`;

module.exports = bookingQueries;
