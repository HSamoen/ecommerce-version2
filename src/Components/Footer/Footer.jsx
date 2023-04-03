import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

//MDB has a collection of free Bootstrap templates, themes, design tools & resources.

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' style={{backgroundColor:"rgb(30, 30, 30)"}}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/hsamoen-eban/' role='button' target="_blank">
            <MDBIcon fab icon='fab fa-linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/' role='button' target="_blank">
            <MDBIcon fab icon='github'/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com/' role='button' target="_blank">
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/' role='button' target="_blank">
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto" >
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' className='mb-4'   />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4' >
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          At Wellness Tea, we exclusively source the finest and most delicious teas from eco-friendly and fair-trade farms all over the world.
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Wellness Tea & Co
        </a>
      </div>
    </MDBFooter>
  );
}


//JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.