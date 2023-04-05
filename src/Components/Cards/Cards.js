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
    <div className='homepage-cards'>
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://cdn.shopify.com/s/files/1/0311/4398/5197/products/ROSE_BLACK_3d550f88-e237-44e3-9d54-424072b4f554_800x.jpg?v=1650401031'
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
            src='https://cdn.shopify.com/s/files/1/0311/4398/5197/products/EGYPTIAN_CHAMOMILE_800x.jpg?v=1654789278'
            alt='chamomile-tea'
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
            src='https://cdn.shopify.com/s/files/1/0311/4398/5197/products/ROOIBOS_CHAI_1200x.jpg?v=1582517957'
            alt='chai-tea'
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
               src='https://cdn.shopify.com/s/files/1/0311/4398/5197/products/WHITE_PEACH_800x.jpg?v=1582505609'
            alt='peach-tea'
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