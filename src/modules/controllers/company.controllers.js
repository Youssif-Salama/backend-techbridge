import ErrorHandlerService from "../../services/error.services.js";
import companyModel from "../models/company.model.js";
import employeeModel from "../models/employee.model.js";

export const addEmployees=ErrorHandlerService(async(req,res)=>{
  const {employees}=req.body;
  if(!employees) return res.status(400).json({message:"employees not found"});
  const company=req.user;
  if(!company || !company.id) return res.status(400).json({message:"company not found"});
  const findCompany=await companyModel.findById(company.id);
  if(!findCompany) return res.status(400).json({message:"company not found"});
  findCompany.Eployees.push(...employees);
  await findCompany.save();
  res.status(200).json({message:"employees added successfully",data:findCompany})
})

export const deleteEmployee=ErrorHandlerService(async(req,res)=>{
  const {id}=req.body;
  if(!id) return res.status(400).json({message:"id not found"});
  const company=req.user;
  if(!company || !company.id) return res.status(400).json({message:"company not found"});
  const findCompany=await companyModel.findById(company.id);
  if(!findCompany) return res.status(400).json({message:"company not found"});
  findCompany.Eployees.splice(findCompany.Eployees.indexOf(id),1);
  await findCompany.save();
  res.status(200).json({message:"employee deleted successfully",data:findCompany})
})


export const changeImage=ErrorHandlerService(async(req,res)=>{
  const files=req.files;
  if(files.length==0) return res.status(400).json({message:"please upload an image"});
  let profileImage={
    name:files[0].originalname,
    url:files[0].path
  };
  const company=req.user;
  if(!company || !company.id) return res.status(400).json({message:"company not found"});
  const findCompany=await companyModel.findById(company.id);
  if(!findCompany) return res.status(400).json({message:"company not found"});
  findCompany.Img=profileImage;
  await findCompany.save();
  res.status(200).json({message:"image updated successfully",data:findCompany})
});

export const changeBanner=ErrorHandlerService(async(req,res)=>{
  const files=req.files;
  if(files.length==0) return res.status(400).json({message:"please upload an image"});
  let bannerImage={
    name:files[0].originalname,
    url:files[0].path
  };
  const company=req.user;
  if(!company || !company.id) return res.status(400).json({message:"company not found"});
  const findCompany=await companyModel.findById(company.id);
  if(!findCompany) return res.status(400).json({message:"company not found"});
  findCompany.Banner=bannerImage;
  await findCompany.save();
  res.status(200).json({message:"banner updated successfully",data:findCompany})
});


export const updateMyData=ErrorHandlerService(async(req,res)=>{
  const {Title,Phone,Address,Type,Description,Slogan}=req.body;
  const company=req.user;
  if(!company || !company.id) return res.status(400).json({message:"company not found"});
  const findCompany=await companyModel.findById(company.id);
  if(!findCompany) return res.status(400).json({message:"company not found"});
  findCompany.Title=Title;
  findCompany.Phone=Phone;
  findCompany.Address=Address;
  findCompany.Type=Type;
  findCompany.Description=Description;
  findCompany.Slogan=Slogan;
  await findCompany.save();
  res.status(200).json({message:"data updated successfully",data:findCompany})
})

export const updateMyEmployees=ErrorHandlerService(async(req,res)=>{
  const {Employees}=req.body;
  if(!Employees) return res.status(400).json({message:"employees not found"});
  const company=req.user;
  if(!company || !company.id) return res.status(400).json({message:"company not found"});
  const findCompany=await companyModel.findById(company.id);
  if(!findCompany) return res.status(400).json({message:"company not found"});
  findCompany.Employees=Employees;
  await findCompany.save();
  res.status(200).json({message:"data updated successfully",data:findCompany})
})

export const companyMetaData=ErrorHandlerService(async(req,res)=>{
  const {useId}=req.query;
  const user = useId?{id:useId}:req.user;
  if(!user || !user.id) return res.status(400).json({message:"user not found"});
  const findCompany=await companyModel.findById(user.id).populate("Employees");
  const companyEmployees=await employeeModel.find({companyId:user.id});
  res.status(200).json({message:"data fetched successfully",data:{companyEmployees,findCompany}});
});
