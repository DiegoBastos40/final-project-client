import { useState } from 'react';

import MyVerticallyCenteredModal from '../Modal/Modal';
import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import back from '../../video/video.mp4'
import '../../App.css'



//https://images.pexels.com/photos/2092479/pexels-photo-2092479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940

const SectionTag = styled.section`
  {
${'' /*     background: url(https://images.pexels.com/photos/2092479/pexels-photo-2092479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center no-repeat;
 */}  
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }
  h1{
      font-size: 5em;
  }
  p{
      width: 30em;
      max-width: 100vw;
  }
  div{
    background-color: rgba(0,0,0, 0.5);
  }
`;
  

function Cover() {
    const [modalShow, setModalShow] = useState(false);


    return (
      
    
    
        <SectionTag>
        <div className='video'>
        <video autoPlay loop muted width="100%" height="100%">
          <source src={back} type="video/mp4"/>
        </video>
      </div>
           {/*  <div>
                
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div> */}
        </SectionTag>
    );
  }
  
  export default Cover;