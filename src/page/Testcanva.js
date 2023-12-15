import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

const Testcanva = () => {

  //const domEl = useRef(null);
  const ref = useRef(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])
  return (
    <div classname="App">
      <button onClick={onButtonClick}>Download Image</button>

      <div ref={ref}>
        <h3>Convert HTML element or document into Image in React</h3>

      </div>

    </div>
  )
}

export default Testcanva;