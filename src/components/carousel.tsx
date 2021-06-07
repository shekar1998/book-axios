import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import '../index.css'

export default function App() {
  return (
      
    <MDBCarousel className="view-up" showControls showIndicators>
      <MDBCarouselInner className="view-up1">
        <MDBCarouselItem  itemId={0}>
          <MDBCarouselElement className="image1"  src='https://www.makemyassignments.com/blog/wp-content/uploads/2018/07/r.jpg' alt='...' />
          <MDBCarouselCaption>
            <h5 className="carousol-image1">First slide label</h5>
            <p className="carousol-image1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem  itemId={1}>
          <MDBCarouselElement  src='https://mdbcdn.b-cdn.net/img/new/slides/042.jpg' alt='...' />
          <MDBCarouselCaption>
          <h5 className="carousol-image1">First slide label</h5>
            <p className="carousol-image1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem  itemId={2}>
          <MDBCarouselElement  src='https://mdbcdn.b-cdn.net/img/new/slides/042.jpg' alt='...' />
          <MDBCarouselCaption>
          <h5 className="carousol-image1">First slide label</h5>
            <p className="carousol-image1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}