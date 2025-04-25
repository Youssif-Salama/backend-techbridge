import ErrorHandlerService from "../../services/error.services.js";
import companyModel from "../models/company.model.js";

export const addEmployees=ErrorHandlerService(async(req,res)=>{
  const {employees}=req.body;
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
  const {Title,Phone,Address,Type,Description}=req.body;
  const company=req.user;
  if(!company || !company.id) return res.status(400).json({message:"company not found"});
  const findCompany=await companyModel.findById(company.id);
  if(!findCompany) return res.status(400).json({message:"company not found"});
  findCompany.Title=Title;
  findCompany.Phone=Phone;
  findCompany.Address=Address;
  findCompany.Type=Type;
  findCompany.Description=Description;
  await findCompany.save();
  res.status(200).json({message:"data updated successfully",data:findCompany})
})