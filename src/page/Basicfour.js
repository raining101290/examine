/* import "./basic.scss"; */
var Latex = require('react-latex');

const Basicfour = ({ setTextfour }) => {

  const abag =() => {
   // let val = '\\frac{1}{n^s}';
    let val = '\\frac{}{}';
    setTextfour(val);
  }
  return (
    <>
      <div className="basic">
        <div className="left">
          <div style={{ display: 'flex' }}>
            <div style={{ width: '15%' }}>
              <div style={{ width: '100%' }}>

                      <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      //onClick={() => setTextfour("$a^2$")}
                      onClick={() => setTextfour("^2")}
                      //\[ a_1^2 + a_2^2 = a_3^2 \]
                    >
                      a<sup>2</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                    // onClick={() => setTextfour("$a^2$")}
                      onClick={() => setTextfour("a_2")}
                    >
                      a<sup>x</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextfour("a_2")}
                    >
                    a
                      <sub>x</sub>
                    </button>

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={abag}
                    >
                  
                  <img src='/images/ax.png' />
                    </button>
                </div>
              <div style={{ width: '100%' }}>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextfour("a_{n_i}")}
                    >
                  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/788cc816a1e89c4c67e119100121f340f9716dca"/>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextfour("\\sqrt[x]{a}")}
                    >
                      <img src='/images/arot.png' />
                    </button>

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextfour("\\sqrt{3}")}
                    >
                      &#8730;a
                    </button>    

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextfour("\\frac{\\partial x}{\\partial y}")}
                    >
                      <img src='/images/delxdely.png' />  
                    </button>    
                    

            </div>  
            <div style={{ width: '100%' }}>
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\left|x\\right|")}
                >
              <Latex>$\left|x\right|$</Latex>
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\lceil x\\rceil")}
                >
              <Latex>$\lceil x\rceil$</Latex>
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\lfloor x\\rfloor")}
                >
              <Latex>$\lfloor x\rfloor$ </Latex>
                </button>  
                         

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\int_{a}^{b}")}
                >
                   <img src='/images/function.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\sum_{n=1}^{1}")}
                >
                   <img src='/images/sumfun.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>               
                  
            </div>  
            <div style={{ width: '100%', display: 'flex' }}>
            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\lim_{x\\to\\infty}")}
                >
                   <img src='/images/limit.png' />
                </button>               
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38, fontSize: 11 }}
                  onClick={() => setTextfour("\\log_xy")}
                >
                  {/*  <img src='/images/logxy.png' /> */} <Latex>$\log_xy$</Latex>
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\frac{dx}{dy}")}
                >
                   <img src='/images/dxdy.png' />
                </button>   

            </div> 
            <div style={{ width: '100%' }}>

            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\oint_{i=1}^n")}
                >
                  <img src='/images/funi.png' style={{ resize: 'cover', width: 38, height: 30 }}/>
                  
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\overleftarrow{xy}")}
                >
                   <img src='/images/xytopbar.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\overline{xy}")}
                >
                   <img src='/images/xytopbar2.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\overrightarrow{xy}")}
                >
                   <img src='/images/xytopbar3.png' style={{ resize: 'cover' }}/>
                
                  
                </button>   

                   <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfour("\\cdot")}
                >
                   
                <Latex>$\cdot$</Latex>
                  
                </button>               
                        
            
            </div>       
         
            </div>
            <div style={{ width: '10%', marginRight: 20 }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("+")}
            >
            +
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("-")}
            >
            <Latex>$-$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("\\pm")}
            >
            <Latex>$\pm$</Latex>
            </button>
            


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("\\times")}
            >
            <Latex>$\times$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("\\div")}
            >
            <Latex>$\div$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("=")}
            >
            <Latex>$=$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("<")}
            >

           <img src='/images/lessden.png' style={{ resize: 'cover' }}/>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour(">")}
            >

           <img src='/images/geterthan.png' style={{ resize: 'cover' }}/>
            </button>           
          

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("$\ne$")}
            >
            <Latex>$\ne$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("\\le")}
            >
           <Latex>$\le$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("\\ge")}
            >
           <Latex>$\ge$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("\\equiv")}
            >
           <Latex>$\equiv$</Latex>
            </button> 
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("\\sim")}
            >
           <Latex>$\sim$</Latex>
            </button> 

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("\\approx")}
            >
           <Latex>$\approx$</Latex>
            </button>             

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("\\cong")}
            >
           <Latex>$\cong$</Latex>
            </button>             

            

                       
            

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("1")}
            >
           1
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("2")}
            >
           2
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfour("3")}
            >
           3
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("4")}
            >
           4
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("5")}
            >
           5
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("6")}
            >
           6
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("7")}
            >
           7
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("8")}
            >
           8
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("9")}
            >
           9
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("10")}
            >
           10
            </button>
            


            </div>

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("10")}
            >
           10
            </button>
              
            </div> 
            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\pi")}
            >
           &#960;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\theta")}
            >
            &#952;
            </button>


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Delta")}
            >
           &#916;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\alpha")}
            >
        &#945;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\beta")}
            >
               &#946;
          
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\nabla")}
            >
            &#8711;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\parallel")}
            >
           &#8741;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\perp")}
            >
          &#8869;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\angle")}
            >
            &#8736;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 , marginTop: 3}}
              onClick={() => setTextfour("\\degree")}
            >
           &#8728;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\infty")}
            >
           &#8734;
            </button> 

                        <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\propto")}
            >
            &#8733;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftarrow")}
            >
            &#8592;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftarrow")}
            >
            &#8594;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >
           &#8596;
            </button>  

            </div>  

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >
             &alpha;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            > &beta;</button>
           
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            > &gamma;</button>
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&delta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&epsilon;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&zeta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&eta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&theta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&iota;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&kappa;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&lambda;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&mu;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&nu;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            > &xi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&omicron;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&pi;</button>  
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&rho;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&sigma;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            > &tau;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            > &upsilon;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&phi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            > &chi;</button> 
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            > &psi;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\leftrightarrow")}
            >&omega;</button>   
              
            </div> 

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\alpha A")}
            > <Latex>$\alpha A$</Latex> </button> 
              <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\alpha B")}
            > <Latex>$B$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Gamma")}
            > <Latex>$\Gamma$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Delta")}
            > <Latex>$\Delta$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\varepsilon E")}
            > <Latex>$E$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\zeta Z")}
            > <Latex>$Z$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\eta H")}
            > <Latex>$H$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Theta")}
            > <Latex>$\Theta$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\iota I")}
            > <Latex>$I$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\kappa K")}
            > <Latex>$K$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\lambda \\Lambda	")}
            > <Latex>$\lambda \Lambda	$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\mu M	")}
            > <Latex>$\mu M	$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\nu N")}
            > <Latex>$\nu N
            $</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Xi")}
            > <Latex>$\Xi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("O")}
            > <Latex>$O$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Pi")}
            > <Latex>$\Pi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\varrho P")}
            > <Latex>$\varrho P$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Sigma")}
            > <Latex>$\Sigma$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\tau T")}
            > <Latex>$\tau T$</Latex> </button> 

            
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Upsilon")}
            > <Latex>$\Upsilon$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Phi")}
            > <Latex>$\Phi$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\chi X")}
            > <Latex>$\chi X$</Latex> </button>   

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfour("\\Psi")}
            > <Latex>$\Psi X$</Latex> </button>   

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\Omega")}
> <Latex>$\Omega$</Latex> </button>       

            </div>

            <div style={{ width: '10%' }}>

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\subset")}
> <Latex>$\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\subseteq")}
> <Latex>$\subseteq$</Latex> </button>   


         <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\not\\subset")}
> <Latex>$\not\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\not\\subseteq")}
> <Latex>$\not\subseteq$</Latex> </button>  


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\supset")}
> <Latex>$\supset$</Latex> </button>  


            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\supseteq")}
> <Latex>$\supseteq$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\not\\supset")}
> <Latex>$\not\supset$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\not\\supseteq")}
> <Latex>$\not\supseteq$</Latex> </button>  
          


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\in")}
> <Latex>$\in$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\ni")}
> <Latex>$\ni$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\notin")}
> <Latex>$\notin$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\not\\ni")}
> <Latex>$\not\ni$</Latex> </button>  
            


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\cup")}
> <Latex>$\cup$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\cap")}
> <Latex>$\cap$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\forall")}
> <Latex>$\forall$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\exists")}
> <Latex>$\exists$</Latex> </button>  
            

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\not\\subset")}
> <Latex>$\vee$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\wedge")}
> <Latex>$\wedge$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\because")}
> <Latex>$\because$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfour("\\therefore")}
> <Latex>$\therefore$</Latex> </button>  
            
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Basicfour;
