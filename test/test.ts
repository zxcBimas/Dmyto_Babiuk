import { env } from "process";
import { expect } from 'chai';
import {Dropbox} from 'dropbox';
import fs = require('fs');

const AUTH = process.env.TOKEN;
const dbx = new Dropbox({accessToken: AUTH});

const filename = 'aboba.txt';
const filecontent = fs.readFileSync(filename);

var res: boolean;

describe("Check authorization", () =>{

    it('Authorization complete', async() =>{
        await dbx.usersGetCurrentAccount().then( (response) => { if(response){res = true}}).catch( (error) => { if(error){res = false}});
        expect(res).to.equal(true);
    })
});

describe("Upload file", () =>{

    it('File is uploaded', async() =>{
        await dbx.filesUpload({path: '/' + filename, mode: { '.tag': 'overwrite' }, contents: filecontent}).then( (response) => { if(response){res = true}}).catch( (error) => { if(error){res = false}});
        expect(res).to.equal(true);
    })
});

describe("Get file metadata", () =>{

    it('Get file metadata', async() =>{
        await dbx.filesGetMetadata({path: '/'+filename}).then( (response) => { if(response){res = true}}).catch( (error) => { if(error){res = false}});
        expect(res).to.equal(true);
    })
});

describe("Delete file", () =>{

    it('File deleted', async() =>{
        await dbx.filesDeleteV2({path: '/'+filename}).then( (response) => { if(response){res = true}}).catch( (error) => { if(error){res = false}});
        expect(res).to.equal(true);
    })
});