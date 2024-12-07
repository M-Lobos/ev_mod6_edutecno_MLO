import request from "supertest";
import { expect } from "chai";
import app from "../main.js";

describe('Api Anime funcionando',() =>{
    describe('Servidor esta arriba',() =>{
        it('Debería iniciar el servidor sin problemas ~^(°,,,°)^~ 🛸',(done)=>{
            request(app)
            .get('/')
            .expect(404)
            .end((err,res) =>{
                if(err) return done(err);
                expect(res.status).to.equal(404);
                done();
            })
        })
    })
})

