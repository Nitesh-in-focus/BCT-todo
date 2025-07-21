const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // 🔒 Check if required fields are present
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // 🔍 Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    // 🔑 Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🆕 Create and save user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword
    });

    await newUser.save();

    // ✅ Respond with success
    res.status(201).json({ message: 'User registered successfully.' });

  } catch (err) {
    console.error(' Error in registration:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

exports.login = async (req, res) => {
  try{
    const{ email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
    const user=await User.findOne({ email });
    if(!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }
    res.status(200).json({
      message: 'Login successful.',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });

  }catch (err) {
    console.error('Error in login:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
