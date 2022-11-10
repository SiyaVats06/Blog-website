// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import *as fs from 'fs'
import { parse } from 'path';

export default async function handler(req, res) {
  let myfile;
  var parser=[];
 let data=await fs.promises.readdir("blogdata")
 for (let index = 0; index < data.length; index++) {
  const item = data[index];
  console.log(item);
  myfile=await fs.promises.readFile(("blogdata/"+item),'utf-8')
  console.log(myfile);
  parser.push(JSON.parse(myfile));
 }
 
   
    
    res.status(200).json(parser);
  }
