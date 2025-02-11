import chai from 'chai';
import chaiHttp from 'chai-http'; // ✅ Fix: No `* as` needed
import app from '../server.js';

chai.use(chaiHttp); // ✅ Ensure chai-http is properly used
const { expect } = chai;

describe('Contacts API', () => {
    let contactId;
    it('should GET all contacts', (done) => {
        console.log("Starting GET test");
    
        chai.request(app)
            .get('/contacts')
            .end((err, res) => {
                if (err) {
                    console.error("❌ Error in GET request:", err);
                    return done(err);
                }
    
                console.log("✅ GET Response Status:", res.status);
                console.log("✅ GET Response Body:", res.body);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    it('should POST a new contact', (done) => {
        console.log("Starting POST test");

        const newContact = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '1234567890'
        };

        chai.request(app)
            .post('/contacts')
            .send(newContact)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('id');
                contactId = res.body.id;
                done();
            });
    });

    after(() => {
        process.exit(0); // ✅ Ensure test process exits properly
    });
});
