const userModel = require("../models/usermodel.js");

const booking = async (req, res, next) => {
    try {
    const data = req.body;
    console.log(data.body)
    const { userName, email, service, reservationTime, reservationDate } = req.body;
            // **Validation Checks**
    if (!userName || !email || !service || !reservationTime || !reservationDate) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }
        // Convert Date to JavaScript Date Object
        const reservationDateTime = new Date(`${reservationDate}T${reservationTime}:00Z`);
   // **Save Data to Database**
   const newBooking = new userModel({
    userName,
    email,
    service,
    reservationTime, // Stored as String for reference
    reservationDate: reservationDateTime, // Full Date-Time Object
});

await newBooking.save();

return res.status(201).json({
    success: true,
    status: 2,
    message: "Booking successfully saved",
    data: newBooking,
});
    } catch (error) {
      return res.send(error);
    }
  };

  module.exports = { booking };