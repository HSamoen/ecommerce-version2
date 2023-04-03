import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,

} from 'mdb-react-ui-kit';

export default function Cards() {
  return (
    <div>
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='Images/blackrosetea.webp'
            alt='blackrose'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Black Rose</MDBCardTitle>
            <MDBCardText>
            Black Rose combines black tea with the enticing floral aroma of roses.
            </MDBCardText>
           
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='Images/chamomiletea.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Chamomile Tea</MDBCardTitle>
            <MDBCardText>An organic chamomile tea blend with a sweet and velvety flavor.</MDBCardText>
      
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='Images/chaitea.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Chai</MDBCardTitle>
            <MDBCardText>
            A caffeine-free alternative to the traditional-- Indian-inspired chai tea.
            </MDBCardText>
           
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
               src='Images/whiteTea.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>White Peach Tea</MDBCardTitle>
            <MDBCardText>
            This organic white tea is infused with the essence of freshly picked peaches.
            </MDBCardText>
           
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}