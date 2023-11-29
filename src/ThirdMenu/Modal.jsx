
/**
 *   FileName : Modal.jsx
 *   Date : 2023.11.27
 * 
 * 
 *  - 문장간의 위아래 간격을 자동으로 줄때 gap 사용
 *  - const modalContainer = {
 *                            width: '670px',
 *                            height: '400px' ,
 *                            gap: '20px'  }
 * 
 */

  


import React from "react";
import { useState } from "react";
import img1 from "../assets/image1.svg";
import img2 from "../assets/image2.svg";

// 전체화면
const mainContainer = {
  // backgroundColor: 'gray' ,
  zIndex : 0 ,
}

const modalContainer = {
  width: '670px',
  height: '400px' ,
  gap: '20px' ,
  pointerEvents: 'auto' ,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flexStart',
  backgroundColor: 'white',
  boxSizing: 'borderBox',
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
  border: ('1px', 'solid', 'black'),
  borderRadius: '4px',
  outline: 0,
  padding: ('8px' ,'24px'),
  margin: (0 ,'auto'),
}

const modalImage = {
  height: '100px' ,
  width: 'auto',
}


const modalInputLabel = {
  display : 'flex' ,
  flexDirection: 'column' ,
}

//  ===== send 버튼 ========
const modalFooterButton = {
  display: 'inlineFlex' ,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1rem',
  width: '82px',
  boxSizing: 'borderBox',
  border: 'none',
  borderRadius: '1px',
  cursor: 'pointer',
  fontWeight: '500px',
  position: 'relative',
  outline: 'none',
  gap: '8px',
  userSelect: 'none',
  height: '40px',
  padding: ('0', '16px'),
  textDecoration: 'none',
}

const modalButtonSend = {
  backgroundColor:'skyblue',
  color: 'orange' ,
} 

const modalContainerSent = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  width: '670px',
  height: '400px',
  gap: '20px',
  gap: '0px',
  fontWeight: '500px',
}

const modalInput ={
  width: '350px',
  height: '35px',
  fontSize: '0.95rem',
  marginTop: '5px',
  padding: '10px',
}

export const Modal = ({ openModal, setOpenModal }) => {
  const [input, setInput] = useState("");
  const [emailSend, setEmailSend] = useState(false);

  const sendEmail = () => {
    setEmailSend(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };

  return (
    <>
      {!emailSend && (
        <div style={mainContainer}>
          <div style={modalContainer}>
            <img style={modalImage} src={img1} />
            <h3>Subscribe to our newsletter</h3>
          
            {/* <div> */}
              <div>
                An email will be sent to you everyweek. The email contains a new
                information that will be received and the information about the
                benefits of using our platform.
              </div>
            {/* </div> */}
            <div style={modalInputLabel} >
              <label >Email address</label>
              <input
                placeholder="Email"
                className="modal-input"
                label={"Input"}
                type="email"
                onChange={(input) => setInput(input)}
              />
            </div>
            <div>
              <button
                style= {modalFooterButton}
                // style= {[modalFooterButton ,modalButtonSend].join(" ")}
                // style= {modalFooterButton  modalButtonSend} 
                // className="modal-footer-button modal-button-send"
               
                onClick={sendEmail}
              >
                Send
              </button>
              <button
                style={modalFooterButton}
                // className="modal-footer-button modal-button-cancel"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {emailSend && (
    <div style={modalContainerSent}>
          <img style={modalImage} src={img2} />
          <div >Email sent!</div>
        </div>
      )}
    </>
  );
};

