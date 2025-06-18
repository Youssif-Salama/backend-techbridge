// data.dictionary.generator.js
import fs from 'fs';
import mongoose from 'mongoose';
import User from './src/modules/models/user.model.js';
import Company from './src/modules/models/company.model.js';
import Post from './src/modules/models/post.model.js';
import Experience from './src/modules/models/experience.model.js';
import Project from './src/modules/models/project.model.js';
import Education from './src/modules/models/education.model.js';
import Employee from './src/modules/models/employee.model.js';
import Comment from './src/modules/models/comment.model.js';
import Application from './src/modules/models/application.model.js';
import Job from './src/modules/models/job.model.js';
import Friend from './src/modules/models/friend.model.js';
import Message from './src/modules/models/message.model.js';


const models = {
  User,
  Company,
  Post,
  Experience,
  Project,
  Education,
  Comment,
  Application,
  Job,
  Employee,
  Friend,
  Message
};

let output = '| Table | Field | Type | Required | Default | Description |\n';
output += '|-------|-------|------|----------|---------|-------------|\n';

for (const [modelName, model] of Object.entries(models)) {
  const schema = model.schema.obj;
  for (const [field, config] of Object.entries(schema)) {
    const type = config?.type?.name || (typeof config === 'function' ? config.name : typeof config);
    const required = config?.required || false;
    const defaultVal = config?.default || '-';
    output += `| ${modelName.toLowerCase()} | ${field} | ${type} | ${required} | ${defaultVal} | - |\n`;
  }
}

fs.writeFileSync('data-dictionary.md', output);
console.log('✅ Data dictionary generated in data-dictionary.md');
