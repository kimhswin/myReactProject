
//  MuiBox_01.js
// 
//   참고 : https://www.youtube.com/watch?v=JlI5j37sbIE&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=14
//  
//    - Box 컴포넌트는 css 유틸을 필요로 하는 wrapper컴포넌트 역할.
//    - <div> 와 <Box > 큰 차이가 없음 

import {Box}  from '@mui/material' ;

const MuiBox_01 =() => {

    return (
        <div  style={{display : 'inline'}} > 
        <div >  div ---------  </div>
        <Box 
             sx={{backgroundColor:'primary.main',
            //  marginTop : '40px' ,
            // flexGrow: 1 ,
            // display : 'inline',
            color : 'white' ,
            height : '100px' ,
            width : '100px',
            padding : '16px' ,
              '&:hover' : {
                backgroundColor : 'primary.light' ,
              } ,   
             }}>  Box component </Box>

        <Box 
            display='flex'
            // display='inline'
            height = '100px'
            width='100px'
            bgcolor='success.light'
            p={2}

            >
            Test
        </Box>     

        </div>  
    )
}

export default MuiBox_01 ;