const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

const createAdminUser = asyncHandler(async (name, pass) => {
  try {
    const existingAdmin = await Admin.findOne({
      username: name,
    });
    if (existingAdmin) {
      console.log("Admin user already exists.");
    } else {
      const admin = new Admin({
        username: name,
        password: pass,
      });

      await admin.save();
      console.log("Admin user created successfully.\nname:", name);
    }
  } catch (err) {
    console.error("Error creating/admin user:", err);
  }
});

module.exports = createAdminUser;
