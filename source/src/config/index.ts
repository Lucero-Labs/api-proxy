import * as fs from 'fs';
import * as path from 'path'

export const mappingConfig = ()=>{
    const configPath = path.join(__dirname, '..' , '..', 'enviroments', 'config.json');
    const configData = fs.readFileSync(configPath, 'utf-8');
    const config = JSON.parse(configData);
    return config
}


