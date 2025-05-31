const transporter = require('../config/mailer.js');

exports.handleDemoForm = async (req, res) => {
  try {
    const { name, mobile, email, organization, designation, city, country, demoRequirement } = req.body;

    if (!name || !mobile || !email || !organization || !designation || !city || !country || !demoRequirement) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const mailOptions = {
      from: email,
      to: 'info@zenitech.in',
      subject: `New Demo Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background:#f9f9f9; color:#333;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; box-shadow:0 0 10px rgba(0,0,0,0.1); overflow:hidden;">
            <div style="background:#4f46e5; color:#fff; padding:20px;">
              <h2 style="margin:0;">📬 New Demo Request Submission</h2>
            </div>
            <div style="padding:20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Mobile:</strong> ${mobile}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#4f46e5;">${email}</a></p>
              <p><strong>Organization:</strong> ${organization}</p>
              <p><strong>Designation:</strong> ${designation}</p>
              <p><strong>City:</strong> ${city}</p>
              <p><strong>Country:</strong> ${country}</p>
              <hr style="margin:20px 0;">
              <p><strong>Demo Requirement Details:</strong></p>
              <p style="white-space: pre-line; line-height: 1.6;">${demoRequirement}</p>

              <div style="text-align: center; margin-top: 35px;">
                <a href="mailto:${email}?subject=Re: Your Demo Request" 
                   style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4); transition: transform 0.2s;">
                  Reply to ${name}
                </a>
              </div>
            </div>
            <div style="background:#f3f4f6; padding:15px; text-align:center; font-size:12px; color:#666;">
              This message was submitted through the demo request form.
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Demo request submitted successfully' });
  } catch (error) {
    console.error('Error in demo form:', error);
    res.status(500).json({ success: false, message: 'Error sending demo request. Please try again later.' });
  }
};
