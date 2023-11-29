/***************************************************
 *    FileName : App.js
 *    Date : 11.29
 *
 *
 *  참고파일 : https://www.youtube.com/watch?v=nSFLYO6Qszc
 *  Git : https://github.com/harakisgeorge/modaldialog
 *
 *  위의 소스를 참고로 하여 css 방식과 값을 수정
 *  다이얼로그는 일반 컴포넌트와 같으나 , call 측에서 상태를 on,off 로
 *  다이얼로그박스 형태를 갖음.
 *  useState 을 파라메터로 전달하여 다이얼로그 박스 On,off 를 수행
 *
 *
 *
 *
 */

import { Modal } from './Modal';
import { useState } from 'react';
// import styled from 'styled-components';

//  ========  전체 화면 설정 =========
const divStyle = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflowY: 'auto',
  margin: (0, 'auto'),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'gray',
};

//  ====== 버튼 위치 설정 ======
//  ====== fixed 로 되어있다.cursor : 'pointer' 화살표로 표시 , padding :8px 로 버튼을 크게한다.
const openModalButton = {
  position: 'fixed',
  top: '10px',
  fontSize: '1rem',
  boxSizing: 'borderBox',
  border: 'none',
  borderRadius: '1px',
  cursor: 'pointer',
  fontWeight: '500px',
  padding: '8px',
  borderRadius: '5px',
  backgroundColor: 'yellow',
};

export function Dialog_01() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div style={divStyle}>
      <button
        style={openModalButton}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Subscribe
      </button>

      {/* 버튼을 클릭하면 Modal 컴포넌트로 이동한다. */}
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default Dialog_01;
