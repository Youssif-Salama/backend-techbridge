import ErrorHandlerService from "../../services/error.services.js";
import companyModel from "../models/company.model.js";
import educationModel from "../models/education.model.js";
import experienceModel from "../models/experience.model.js";
import projectModel from "../models/project.model.js";
import userModel from "../models/user.model.js";

export const getMyData = ErrorHandlerService(async (req, res) => {
  const user = req.user;

  if (!user || !user.id) {
    return res.status(400).json({ message: "User not found" });
  }
  let findUser = await userModel.findById(user.id);
  if (!findUser) {
    findUser = await companyModel.findById(user.id);
  }

  if (!findUser) {
    return res.status(400).json({ message: "User and company not found" });
  }

  res.status(200).json({
    message: "Data fetched successfully",
    data: { user: findUser },
  });
});

export const addASkill = ErrorHandlerService(async (req, res) => {
  const { Skill } = req.body;
  const user = req.user;
  if (!user || !user.id) {
    return res.status(400).json({ message: "User not found" });
  }
  const findUser = await userModel.findById(user.id);
  if (!findUser) {
    return res.status(400).json({ message: "User not found" });
  }
  // check if skill is already added
  if (findUser.skills.includes(Skill)) {
    return res.status(400).json({ message: "Skill already added" });
  }
  findUser.skills.push(Skill);
  await findUser.save();
  res.status(200).json({ message: "Skill added successfully", data: findUser });
});

export const deleteASkill = ErrorHandlerService(async (req, res) => {
  const { Skill } = req.body;
  const user = req.user;
  if (!user || !user.id)
    return res.status(400).json({ message: "user not found" });
  const findUser = await userModel.findById(user.id);
  if (!findUser) return res.status(400).json({ message: "user not found" });
  findUser.skills.splice(findUser.skills.indexOf(Skill), 1);
  await findUser.save();
  res
    .status(200)
    .json({ message: "skill deleted successfully", data: findUser });
});

export const updateMyData = ErrorHandlerService(async (req, res) => {
  const {
    Fname,
    Lname,
    Gender,
    Address,
    Languages,
    Experience,
    Phone,
    Description,
    Slogan,
  } = req.body;
  const user = req.user;
  if (!user || !user.id)
    return res.status(400).json({ message: "user not found" });
  const findUser = await userModel.findById(user.id);
  if (!findUser) return res.status(400).json({ message: "user not found" });
  findUser.Fname = Fname;
  findUser.Lname = Lname;
  findUser.Gender = Gender;
  findUser.Address = Address;
  findUser.Languages = Languages;
  findUser.Experience = Experience;
  findUser.Phone = Phone;
  findUser.Description = Description;
  findUser.Slogan = Slogan;
  await findUser.save();
  res
    .status(200)
    .json({ message: "data updated successfully", data: findUser });
});

export const changeImage = ErrorHandlerService(async (req, res) => {
  const files = req.files;
  let profileImage = {
    name: files[0].originalname,
    url: files[0].path,
  };
  const user = req.user;
  if (!user || !user.id)
    return res.status(400).json({ message: "user not found" });
  const findUser = await userModel.findById(user.id);
  if (!findUser) return res.status(400).json({ message: "user not found" });
  findUser.Img = profileImage;
  await findUser.save();
  res
    .status(200)
    .json({ message: "image updated successfully", data: findUser });
});

export const userMetaData = ErrorHandlerService(async (req, res) => {
  const {useId}=req.query;
  const user = useId?{id:useId}:req.user;
  if (!user || !user.id)
    return res.status(400).json({ message: "user not found" });
  const findUser = await userModel.findById(user.id);
  const userProjects = await projectModel.find({ makerId: user.id });
  const userEducations = await educationModel.find({ makerId: user.id });
  const userExperiences = await experienceModel.find({ makerId: user.id });
  res
    .status(200)
    .json({
      message: "data fetched successfully",
      data: { userProjects, userEducations, userExperiences, findUser },
    });
});

export const updateSkillsAndLanguages = ErrorHandlerService(
  async (req, res) => {
    const { skills, Languages } = req.body;
    const user = req.user;
    if (!user || !user.id)
      return res.status(400).json({ message: "user not found" });
    const findUser = await userModel.findById(user.id);
    if (!findUser) return res.status(400).json({ message: "user not found" });
    findUser.skills = skills;
    findUser.Languages = Languages;
    await findUser.save();
    res.status(200).json({ message: "data updated successfully" });
  }
);
