/* import "./basic.scss"; */
var Latex = require('react-latex');

const Basicthree = ({ setTextthree }) => {

  const abag =() => {
   // let val = '\\frac{1}{n^s}';
    let val = '\\frac{}{}';
    setTextthree(val);
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
                      //onClick={() => setTextthree("$a^2$")}
                      onClick={() => setTextthree("^2")}
                      //\[ a_1^2 + a_2^2 = a_3^2 \]
                    >
                      a<sup>2</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                    // onClick={() => setTextthree("$a^2$")}
                      onClick={() => setTextthree("a_2")}
                    >
                      a<sup>x</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextthree("a_2")}
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
                      onClick={() => setTextthree("a_{n_i}")}
                    >
                  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/788cc816a1e89c4c67e119100121f340f9716dca"/>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextthree("\\sqrt[x]{a}")}
                    >
                      <img src='/images/arot.png' />
                    </button>

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextthree("\\sqrt{3}")}
                    >
                      &#8730;a
                    </button>    

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextthree("\\frac{\\partial x}{\\partial y}")}
                    >
                      <img src='/images/delxdely.png' />  
                    </button>    
                    

            </div>  
            <div style={{ width: '100%' }}>
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\left|x\\right|")}
                >
              <Latex>$\left|x\right|$</Latex>
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\lceil x\\rceil")}
                >
              <Latex>$\lceil x\rceil$</Latex>
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\lfloor x\\rfloor")}
                >
              <Latex>$\lfloor x\rfloor$ </Latex>
                </button>  
                         

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\int_{a}^{b}")}
                >
                   <img src='/images/function.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\sum_{n=1}^{1}")}
                >
                   <img src='/images/sumfun.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>               
                  
            </div>  
            <div style={{ width: '100%', display: 'flex' }}>
            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\lim_{x\\to\\infty}")}
                >
                   <img src='/images/limit.png' />
                </button>               
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38, fontSize: 11 }}
                  onClick={() => setTextthree("\\log_xy")}
                >
                  {/*  <img src='/images/logxy.png' /> */} <Latex>$\log_xy$</Latex>
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\frac{dx}{dy}")}
                >
                   <img src='/images/dxdy.png' />
                </button>   

            </div> 
            <div style={{ width: '100%' }}>

            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\oint_{i=1}^n")}
                >
                  <img src='/images/funi.png' style={{ resize: 'cover', width: 38, height: 30 }}/>
                  
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\overleftarrow{xy}")}
                >
                   <img src='/images/xytopbar.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\overline{xy}")}
                >
                   <img src='/images/xytopbar2.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\overrightarrow{xy}")}
                >
                   <img src='/images/xytopbar3.png' style={{ resize: 'cover' }}/>
                
                  
                </button>   

                   <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextthree("\\cdot")}
                >
                   
                <Latex>$\cdot$</Latex>
                  
                </button>               
                        
            
            </div>       
         
            </div>
            <div style={{ width: '10%', marginRight: 20 }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("+")}
            >
            +
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("-")}
            >
            <Latex>$-$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("\\pm")}
            >
            <Latex>$\pm$</Latex>
            </button>
            


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("\\times")}
            >
            <Latex>$\times$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("\\div")}
            >
            <Latex>$\div$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("=")}
            >
            <Latex>$=$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("<")}
            >

           <img src='/images/lessden.png' style={{ resize: 'cover' }}/>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree(">")}
            >

           <img src='/images/geterthan.png' style={{ resize: 'cover' }}/>
            </button>           
          

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("$\ne$")}
            >
            <Latex>$\ne$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("\\le")}
            >
           <Latex>$\le$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("\\ge")}
            >
           <Latex>$\ge$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("\\equiv")}
            >
           <Latex>$\equiv$</Latex>
            </button> 
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("\\sim")}
            >
           <Latex>$\sim$</Latex>
            </button> 

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("\\approx")}
            >
           <Latex>$\approx$</Latex>
            </button>             

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("\\cong")}
            >
           <Latex>$\cong$</Latex>
            </button>             

            

                       
            

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("1")}
            >
           1
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("2")}
            >
           2
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextthree("3")}
            >
           3
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("4")}
            >
           4
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("5")}
            >
           5
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("6")}
            >
           6
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("7")}
            >
           7
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("8")}
            >
           8
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("9")}
            >
           9
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("10")}
            >
           10
            </button>
            


            </div>

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("10")}
            >
           10
            </button>
              
            </div> 
            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\pi")}
            >
           &#960;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\theta")}
            >
            &#952;
            </button>


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Delta")}
            >
           &#916;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\alpha")}
            >
        &#945;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\beta")}
            >
               &#946;
          
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\nabla")}
            >
            &#8711;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\parallel")}
            >
           &#8741;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\perp")}
            >
          &#8869;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\angle")}
            >
            &#8736;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 , marginTop: 3}}
              onClick={() => setTextthree("\\degree")}
            >
           &#8728;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\infty")}
            >
           &#8734;
            </button> 

                        <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\propto")}
            >
            &#8733;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftarrow")}
            >
            &#8592;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftarrow")}
            >
            &#8594;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >
           &#8596;
            </button>  

            </div>  

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >
             &alpha;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            > &beta;</button>
           
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            > &gamma;</button>
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&delta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&epsilon;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&zeta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&eta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&theta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&iota;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&kappa;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&lambda;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&mu;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&nu;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            > &xi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&omicron;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&pi;</button>  
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&rho;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&sigma;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            > &tau;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            > &upsilon;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&phi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            > &chi;</button> 
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            > &psi;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\leftrightarrow")}
            >&omega;</button>   
              
            </div> 

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\alpha A")}
            > <Latex>$\alpha A$</Latex> </button> 
              <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\alpha B")}
            > <Latex>$B$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Gamma")}
            > <Latex>$\Gamma$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Delta")}
            > <Latex>$\Delta$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\varepsilon E")}
            > <Latex>$E$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\zeta Z")}
            > <Latex>$Z$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\eta H")}
            > <Latex>$H$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Theta")}
            > <Latex>$\Theta$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\iota I")}
            > <Latex>$I$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\kappa K")}
            > <Latex>$K$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\lambda \\Lambda	")}
            > <Latex>$\lambda \Lambda	$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\mu M	")}
            > <Latex>$\mu M	$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\nu N")}
            > <Latex>$\nu N
            $</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Xi")}
            > <Latex>$\Xi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("O")}
            > <Latex>$O$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Pi")}
            > <Latex>$\Pi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\varrho P")}
            > <Latex>$\varrho P$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Sigma")}
            > <Latex>$\Sigma$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\tau T")}
            > <Latex>$\tau T$</Latex> </button> 

            
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Upsilon")}
            > <Latex>$\Upsilon$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Phi")}
            > <Latex>$\Phi$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\chi X")}
            > <Latex>$\chi X$</Latex> </button>   

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextthree("\\Psi")}
            > <Latex>$\Psi X$</Latex> </button>   

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\Omega")}
> <Latex>$\Omega$</Latex> </button>       

            </div>

            <div style={{ width: '10%' }}>

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\subset")}
> <Latex>$\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\subseteq")}
> <Latex>$\subseteq$</Latex> </button>   


         <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\not\\subset")}
> <Latex>$\not\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\not\\subseteq")}
> <Latex>$\not\subseteq$</Latex> </button>  


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\supset")}
> <Latex>$\supset$</Latex> </button>  


            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\supseteq")}
> <Latex>$\supseteq$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\not\\supset")}
> <Latex>$\not\supset$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\not\\supseteq")}
> <Latex>$\not\supseteq$</Latex> </button>  
          


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\in")}
> <Latex>$\in$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\ni")}
> <Latex>$\ni$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\notin")}
> <Latex>$\notin$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\not\\ni")}
> <Latex>$\not\ni$</Latex> </button>  
            


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\cup")}
> <Latex>$\cup$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\cap")}
> <Latex>$\cap$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\forall")}
> <Latex>$\forall$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\exists")}
> <Latex>$\exists$</Latex> </button>  
            

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\not\\subset")}
> <Latex>$\vee$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\wedge")}
> <Latex>$\wedge$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\because")}
> <Latex>$\because$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextthree("\\therefore")}
> <Latex>$\therefore$</Latex> </button>  
            
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Basicthree;
