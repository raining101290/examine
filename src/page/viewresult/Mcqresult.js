import React, { useState, useEffect } from 'react'
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill'
import * as base from "../global";
const Mcqdata = (data) => {
  const [isOpenquestionimage, setIsOpenquestionimage] = useState(false);
  console.log('data....' + JSON.stringify(data))
  const userdata = data.data;
  return (
    <div>
      <table>
        {/*       {
        datas.map((m) =>{
          <tr>
          <td>
           {m.questiontitle}
          </td>
        </tr>
        })
      } */}
        {
          userdata.questiontype1 == 'Text' ?
            <tr>
              <td>
                {userdata.questiontitle}
              </td>
            </tr>
            :
            <tr>
              <td>
                <StaticMathField>
                  {userdata.questiontitle}
                </StaticMathField>
              </td>
            </tr>

        }

        {
          userdata.questiontype1 == 'Text' ?
            <tr>
              <td>
                {userdata.questiontitle1}
              </td>
            </tr>
            :
            <tr>
              <td>
                <StaticMathField>
                  {userdata.questiontitle1}
                </StaticMathField>
              </td>
            </tr>

        }


        {
          userdata.questiontype2 == 'Text' ?
            <tr><td>{userdata.questiontitle2}
            </td></tr>
            :
            <tr>
              <td>
                <StaticMathField>
                  {userdata.questiontitle2}
                </StaticMathField>
              </td>
            </tr>

        }
        {
          userdata.questiontype3 == 'Text' ?
            <tr><td>{userdata.questiontitle3}  </td></tr>
            :
            <tr><td><StaticMathField>
              {userdata.questiontitle3}
            </StaticMathField>
            </td></tr>
        }

        {
          userdata.questiontype4 == 'Text' ?
            <tr><td> {userdata.questiontitle4}  </td></tr>
            :
            <tr><td>
              <StaticMathField>
                {userdata.questiontitle4}
              </StaticMathField> </td></tr>
        }
        {
          userdata.questiontype5 == 'Text' ?
            <tr><td>
              {userdata.questiontitle5}
            </td></tr>
            :
            <tr><td>
              <StaticMathField>
                {userdata.questiontitle5}
              </StaticMathField> </td></tr>
        }


        <tr>
          <td colSpan={4}>
            {
              userdata.questionimage == 'x`' ?
                ''
                :
                <img src={base.BASE_URL + userdata.questionimage}
                  style={{ resize: 'cover', width: 100, height: 100 }}
                  onClick={() => setIsOpenquestionimage(true)}
                />
            }

          </td>
        </tr>
      </table>
      {
        userdata.quiztype == 'MCQ' ?
          <div>
            <tr>
              <td>
                <div style={{ display: 'flex' }}>
                  {
                    userdata.Answer == 'A' ?
                      <div className='bg-green'></div>
                      :
                      <div className='bg-red'></div>
                  }
                  {
                    userdata.Atype == "Text" ?
                      <p>{userdata.Atitle}</p>
                      :
                      <StaticMathField>
                        {userdata.Atitle}
                      </StaticMathField>
                  }
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  {
                    userdata.Answer == 'B' ?
                      <div className='bg-green'></div>
                      :
                      <div className='bg-red'></div>
                  }
                  {
                    userdata.Btype == "Text" ?
                      <p>{userdata.Btitle}</p>
                      :
                      <StaticMathField>
                        {userdata.Btitle}
                      </StaticMathField>
                  }
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: 'flex' }}>
                  {
                    userdata.Answer == 'C' ?
                      <div className='bg-green'></div>
                      :
                      <div className='bg-red'></div>
                  }

                  {
                    userdata.Ctype == "Text" ?
                      <p>{userdata.Ctitle}</p>
                      :
                      <StaticMathField>
                        {userdata.Ctitle}
                      </StaticMathField>
                  }
                </div>
              </td>
              <td>
                <div style={{ display: 'flex' }}>
                  {
                    userdata.Answer == 'D' ?
                      <div className='bg-green'></div>
                      :
                      <div className='bg-red'></div>
                  }

                  {
                    userdata.Dtype == "Text" ?
                      <p>{userdata.Dtitle}</p>
                      :
                      <StaticMathField>
                        {userdata.Dtitle}
                      </StaticMathField>
                  }
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                Answer.  {userdata.Answer}


              </td>

            </tr>
            <tr>
              <td colSpan={2}>

                Question Type:  {userdata.quiztype} {userdata.ans}


              </td>

            </tr>
            <tr>
              <td colSpan={2}>
                {
                  userdata.answertype == 'Correct' ?
                    <span className='correcttbtn'>{userdata.answertype}</span>
                    :
                    <span className='incorrectbtn'>{userdata.answertype}</span>
                }
              </td>
            </tr>
          </div>
          :
          ''
      }
    </div >
  )
}

export default Mcqdata
