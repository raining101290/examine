/* import "./basic.scss"; */
var Latex = require('react-latex');

const Basicfive = ({ setTextfive }) => {

  const abag =() => {
   // let val = '\\frac{1}{n^s}';
    let val = '\\frac{}{}';
    setTextfive(val);
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
                      //onClick={() => setTextfive("$a^2$")}
                      onClick={() => setTextfive("^2")}
                      //\[ a_1^2 + a_2^2 = a_3^2 \]
                    >
                      a<sup>2</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                    // onClick={() => setTextfive("$a^2$")}
                      onClick={() => setTextfive("a_2")}
                    >
                      a<sup>x</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextfive("a_2")}
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
                      onClick={() => setTextfive("a_{n_i}")}
                    >
                  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/788cc816a1e89c4c67e119100121f340f9716dca"/>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextfive("\\sqrt[x]{a}")}
                    >
                      <img src='/images/arot.png' />
                    </button>

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextfive("\\sqrt{3}")}
                    >
                      &#8730;a
                    </button>    

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTextfive("\\frac{\\partial x}{\\partial y}")}
                    >
                      <img src='/images/delxdely.png' />  
                    </button>    
                    

            </div>  
            <div style={{ width: '100%' }}>
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\left|x\\right|")}
                >
              <Latex>$\left|x\right|$</Latex>
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\lceil x\\rceil")}
                >
              <Latex>$\lceil x\rceil$</Latex>
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\lfloor x\\rfloor")}
                >
              <Latex>$\lfloor x\rfloor$ </Latex>
                </button>  
                         

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\int_{a}^{b}")}
                >
                   <img src='/images/function.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\sum_{n=1}^{1}")}
                >
                   <img src='/images/sumfun.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>               
                  
            </div>  
            <div style={{ width: '100%', display: 'flex' }}>
            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\lim_{x\\to\\infty}")}
                >
                   <img src='/images/limit.png' />
                </button>               
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38, fontSize: 11 }}
                  onClick={() => setTextfive("\\log_xy")}
                >
                  {/*  <img src='/images/logxy.png' /> */} <Latex>$\log_xy$</Latex>
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\frac{dx}{dy}")}
                >
                   <img src='/images/dxdy.png' />
                </button>   

            </div> 
            <div style={{ width: '100%' }}>

            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\oint_{i=1}^n")}
                >
                  <img src='/images/funi.png' style={{ resize: 'cover', width: 38, height: 30 }}/>
                  
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\overleftarrow{xy}")}
                >
                   <img src='/images/xytopbar.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\overline{xy}")}
                >
                   <img src='/images/xytopbar2.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\overrightarrow{xy}")}
                >
                   <img src='/images/xytopbar3.png' style={{ resize: 'cover' }}/>
                
                  
                </button>   

                   <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTextfive("\\cdot")}
                >
                   
                <Latex>$\cdot$</Latex>
                  
                </button>               
                        
            
            </div>       
         
            </div>
            <div style={{ width: '10%', marginRight: 20 }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("+")}
            >
            +
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("-")}
            >
            <Latex>$-$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("\\pm")}
            >
            <Latex>$\pm$</Latex>
            </button>
            


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("\\times")}
            >
            <Latex>$\times$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("\\div")}
            >
            <Latex>$\div$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("=")}
            >
            <Latex>$=$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("<")}
            >

           <img src='/images/lessden.png' style={{ resize: 'cover' }}/>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive(">")}
            >

           <img src='/images/geterthan.png' style={{ resize: 'cover' }}/>
            </button>           
          

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("$\ne$")}
            >
            <Latex>$\ne$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("\\le")}
            >
           <Latex>$\le$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("\\ge")}
            >
           <Latex>$\ge$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("\\equiv")}
            >
           <Latex>$\equiv$</Latex>
            </button> 
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("\\sim")}
            >
           <Latex>$\sim$</Latex>
            </button> 

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("\\approx")}
            >
           <Latex>$\approx$</Latex>
            </button>             

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("\\cong")}
            >
           <Latex>$\cong$</Latex>
            </button>             

            

                       
            

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("1")}
            >
           1
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("2")}
            >
           2
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTextfive("3")}
            >
           3
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("4")}
            >
           4
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("5")}
            >
           5
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("6")}
            >
           6
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("7")}
            >
           7
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("8")}
            >
           8
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("9")}
            >
           9
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("10")}
            >
           10
            </button>
            


            </div>

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("10")}
            >
           10
            </button>
              
            </div> 
            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\pi")}
            >
           &#960;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\theta")}
            >
            &#952;
            </button>


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Delta")}
            >
           &#916;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\alpha")}
            >
        &#945;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\beta")}
            >
               &#946;
          
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\nabla")}
            >
            &#8711;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\parallel")}
            >
           &#8741;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\perp")}
            >
          &#8869;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\angle")}
            >
            &#8736;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 , marginTop: 3}}
              onClick={() => setTextfive("\\degree")}
            >
           &#8728;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\infty")}
            >
           &#8734;
            </button> 

                        <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\propto")}
            >
            &#8733;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftarrow")}
            >
            &#8592;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftarrow")}
            >
            &#8594;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >
           &#8596;
            </button>  

            </div>  

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >
             &alpha;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            > &beta;</button>
           
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            > &gamma;</button>
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&delta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&epsilon;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&zeta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&eta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&theta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&iota;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&kappa;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&lambda;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&mu;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&nu;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            > &xi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&omicron;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&pi;</button>  
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&rho;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&sigma;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            > &tau;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            > &upsilon;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&phi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            > &chi;</button> 
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            > &psi;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\leftrightarrow")}
            >&omega;</button>   
              
            </div> 

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\alpha A")}
            > <Latex>$\alpha A$</Latex> </button> 
              <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\alpha B")}
            > <Latex>$B$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Gamma")}
            > <Latex>$\Gamma$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Delta")}
            > <Latex>$\Delta$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\varepsilon E")}
            > <Latex>$E$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\zeta Z")}
            > <Latex>$Z$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\eta H")}
            > <Latex>$H$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Theta")}
            > <Latex>$\Theta$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\iota I")}
            > <Latex>$I$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\kappa K")}
            > <Latex>$K$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\lambda \\Lambda	")}
            > <Latex>$\lambda \Lambda	$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\mu M	")}
            > <Latex>$\mu M	$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\nu N")}
            > <Latex>$\nu N
            $</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Xi")}
            > <Latex>$\Xi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("O")}
            > <Latex>$O$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Pi")}
            > <Latex>$\Pi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\varrho P")}
            > <Latex>$\varrho P$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Sigma")}
            > <Latex>$\Sigma$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\tau T")}
            > <Latex>$\tau T$</Latex> </button> 

            
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Upsilon")}
            > <Latex>$\Upsilon$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Phi")}
            > <Latex>$\Phi$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\chi X")}
            > <Latex>$\chi X$</Latex> </button>   

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTextfive("\\Psi")}
            > <Latex>$\Psi X$</Latex> </button>   

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\Omega")}
> <Latex>$\Omega$</Latex> </button>       

            </div>

            <div style={{ width: '10%' }}>

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\subset")}
> <Latex>$\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\subseteq")}
> <Latex>$\subseteq$</Latex> </button>   


         <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\not\\subset")}
> <Latex>$\not\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\not\\subseteq")}
> <Latex>$\not\subseteq$</Latex> </button>  


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\supset")}
> <Latex>$\supset$</Latex> </button>  


            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\supseteq")}
> <Latex>$\supseteq$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\not\\supset")}
> <Latex>$\not\supset$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\not\\supseteq")}
> <Latex>$\not\supseteq$</Latex> </button>  
          


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\in")}
> <Latex>$\in$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\ni")}
> <Latex>$\ni$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\notin")}
> <Latex>$\notin$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\not\\ni")}
> <Latex>$\not\ni$</Latex> </button>  
            


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\cup")}
> <Latex>$\cup$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\cap")}
> <Latex>$\cap$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\forall")}
> <Latex>$\forall$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\exists")}
> <Latex>$\exists$</Latex> </button>  
            

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\not\\subset")}
> <Latex>$\vee$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\wedge")}
> <Latex>$\wedge$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\because")}
> <Latex>$\because$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTextfive("\\therefore")}
> <Latex>$\therefore$</Latex> </button>  
            
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Basicfive;
