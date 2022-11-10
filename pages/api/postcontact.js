import *as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
      let data=await fs.promises.readdir('contactdata');
      console.log(data.length)
      fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body))
   console.log(data);
        res.status(200).json(data);
    } else {
        res.status(200).json({ name: 'GET' })
        }
  }