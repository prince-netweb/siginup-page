import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"
import { Row } from 'react-bootstrap';
import { Col } from "react-bootstrap"
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { BsFacebook } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
function App() {
  return (
    <div classNameName="App">
      <section section className='m-5  shadow color '>
        <Container >
          <Row className=' p-5 '>
            <Col md={7} className=" p-5 shadow d-flex align-items-center img-class " style={{ backgroundSize: "cover" }}>
              <img src="./img.jpg" className='img-fluid ' />
            </Col>
            <Col md={5} className=" shadow p-3 custom-class">
              <h6 className=' ml-2 font-weight-bold text-primary'>ghostlamp</h6>
              <h4 className='my-3'>Welcome to Family</h4>
              <p className='para'>A workspace to over 12 million influencner around the golbal world</p>
              <form >

                <div className='d-flex wrapper rounded flex-nowra bg-color'>
                  <div className='p-2  '>
                    <HiOutlineMail className='email' />
                  </div>
                  <div class="form-floating mb-3 custom-width ">
                    <input type="email" className="form-control  border-bottom outline-none color-input"
                      id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput" >Email address</label>
                  </div>


                </div>



              </form>
              <div className='d-flex 
              
              \rounded flex-nowra'>
                <div className='p-2  '>
                  <BiLockAlt className='email' />
                </div>
                <div class="form-floating mb-3 custom-width ">
                  <input type="email" className="form-control  border-bottom outline-none color-input"
                    id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput" >Password</label>
                </div>


              </div>
              <div className='d-flex wrapper rounded flex-nowra'>
                <div className='p-2  '>
                  <BiLockAlt className='email' />
                </div>
                <div class="form-floating mb-3 custom-width ">
                  <input type="email" className="form-control  border-bottom outline-none color-input"
                    id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput" > Repeat Password</label>
                </div>


              </div>
              <div className='d-flex wrapper rounded flex-nowra'>
                <div className='p-2  '>
                  <BsTelephoneFill className='email' />
                </div>
                <div class="form-floating mb-3 custom-width ">
                  <input type="email" className="form-control  border-bottom outline-none color-input"
                    id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput" >Phone Number</label>
                </div>


              </div>
              <button className='btn btn-primary font-weight-bold my-3'>Sigin up now</button>
              <buuton className="btn btn-light font-weight-bold mx-1 ">Get Login</buuton><br></br>
              <small className='text-secondary'>or you can join with</small>
              <div className='mb-5'>
                <FcGoogle className='m-2 font' />
                <BsFacebook className='m-2 font' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div >
  );
}

export default App;
