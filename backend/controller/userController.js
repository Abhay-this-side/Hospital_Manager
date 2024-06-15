import {catchAsyncErrors} from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import {User} from "../models/userSchema.js"
import {generateToken} from "../utils/jwtToken.js"
import cloudinary from "../config/cloudinaryConfig.js";


export const patientRegister = catchAsyncErrors(async(req,res,next)=>{
    const {firstName,lastName,email,phone,abha,password,gender,dob,role} = req.body;
    if(!firstName || !lastName || !email || !phone || !abha || !password || !gender || !dob || !role ){
        return next(new ErrorHandler("Please fill details",400));
    }
    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
    return next(new ErrorHandler("User already Registered!", 400));
  }

   const user = await User.create({firstName,lastName,email,phone,password,dob,abha,gender,role});


    generateToken(user,"User Registered",200,res);
    // res.status(200).json({
    //     success:true,
    //     message : "User Registered"
    // });
});

export const login = catchAsyncErrors(async(req,res,next)=>{
    const {email,password,confirmPassword, role} = req.body;
    if(!email || !password ||!role || !confirmPassword){
        return next(new ErrorHandler("Please fill details",400));
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("Password doesn't matches",400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email or Password",400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password",400));
    }
    if(role!==user.role){
        return next(new ErrorHandler("User with this role not found",400));
    }
    generateToken(user,"Successfully logged in",200,res)
    // res.status(200).json({
    //     success:true,
    //     message : "Successfully logged in"
    // });
})

export const addNewAdmin = catchAsyncErrors(async(req,res,next)=>{
    const {firstName,lastName,email,phone,abha,password,gender,dob} = req.body;

    if(!firstName || !lastName || !email || !phone || !abha || !password || !gender || !dob ){
        return next(new ErrorHandler("Please fill details",400));
    }

    const isRegistered = await User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} with this email exists`));
    }
    const admin = await User.create({firstName,lastName,email,phone,abha,password,gender,dob,role:"Admin"});

    res.status(200).json({
        success:true,
        message : "Admin Created"
    })
})

export const getAllDoctors = catchAsyncErrors(async(req,res,next)=>{
    
    const doctors = await User.find({role:"Doctor"});
    res.status(200).json({
        success:true,
        doctors,
    })
})

export const getUserDetails = catchAsyncErrors(async(req,res,next)=>{
    
    const user = req.user;

    res.status(200).json({
        success:true,
        user,
    })
})
export const logoutAdmin = catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("adminToken","",{
        httpOnly:true,
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message:"Log Out Successfully"
    })
})
export const logoutPatient = catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("patientToken","",{
        httpOnly:true,
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message:"Log Out Successfully"
    })
})







export const addNewDoctor = catchAsyncErrors(async(req,res,next)=>{
   if(!req.files || Object.keys(req.files).length===0){
    return next(new ErrorHandler("Doctor Avatar Required",400))
   }
   const {docAvatar} = req.files;
   const allowedFormats = ["image/png","image/jpeg","image/webp"];
   
   if(!allowedFormats.includes(docAvatar.mimetype)){
       return next(new ErrorHandler("Avatar Format not supported",400))
    }

    const {firstName,lastName,email,phone,abha,password,gender,dob, doctorDepartment} = req.body;

    if(!firstName || !lastName || !email || !phone || !abha || !password || !gender || !dob || !doctorDepartment ){
        return next(new ErrorHandler("Please fill details",400));
    }
    const isRegistered = await User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} already registered`,400))
    }
    
    const cloudinaryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath, {
        folder: 'doctor_avatars',
        resource_type: 'image'
    });
    
    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.error("Cloudinary Error : ", cloudinaryResponse.error || "Unknown Cloudinary Error")
    } 
    const doctor = await User.create({
        firstName,
        lastName,
        email,
        phone,
        abha,
        password,
        gender,
        dob,
        doctorDepartment,
        role: "Doctor",
        docAvatar: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url
        }
    });
    res.status(200).json({
        success:true,
        message:"New Doctor Registered",
        doctor
        
    });
    });
    