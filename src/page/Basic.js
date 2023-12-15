/* import "./basic.scss"; */
var Latex = require('react-latex');

const Basic = ({ setText }) => {

  const abag =() => {
   // let val = '\\frac{1}{n^s}';
    let val = '\\frac{}{}';
    setText(val);
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
                      //onClick={() => setText("$a^2$")}
                      onClick={() => setText("^2")}
                      //\[ a_1^2 + a_2^2 = a_3^2 \]
                    >
                      a<sup>2</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                    // onClick={() => setText("$a^2$")}
                      onClick={() => setText("a_2")}
                    >
                      a<sup>x</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setText("a_2")}
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
                      onClick={() => setText("a_{n_i}")}
                    >
                  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/788cc816a1e89c4c67e119100121f340f9716dca"/>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setText("\\sqrt[x]{a}")}
                    >
                      <img src='/images/arot.png' />
                    </button>

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setText("\\sqrt{3}")}
                    >
                      &#8730;a
                    </button>    

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setText("\\frac{\\partial x}{\\partial y}")}
                    >
                      <img src='/images/delxdely.png' />  
                    </button>    
                    

            </div>  
            <div style={{ width: '100%' }}>
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\left|x\\right|")}
                >
              <Latex>$\left|x\right|$</Latex>
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\lceil x\\rceil")}
                >
              <Latex>$\lceil x\rceil$</Latex>
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\lfloor x\\rfloor")}
                >
              <Latex>$\lfloor x\rfloor$ </Latex>
                </button>  
                         

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\int_{a}^{b}")}
                >
                   <img src='/images/function.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\sum_{n=1}^{1}")}
                >
                   <img src='/images/sumfun.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>               
                  
            </div>  
            <div style={{ width: '100%', display: 'flex' }}>
            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\lim_{x\\to\\infty}")}
                >
                   <img src='/images/limit.png' />
                </button>               
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38, fontSize: 11 }}
                  onClick={() => setText("\\log_xy")}
                >
                  {/*  <img src='/images/logxy.png' /> */} <Latex>$\log_xy$</Latex>
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\frac{dx}{dy}")}
                >
                   <img src='/images/dxdy.png' />
                </button>   

            </div> 
            <div style={{ width: '100%' }}>

            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\oint_{i=1}^n")}
                >
                  <img src='/images/funi.png' style={{ resize: 'cover', width: 38, height: 30 }}/>
                  
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\overleftarrow{xy}")}
                >
                   <img src='/images/xytopbar.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\overline{xy}")}
                >
                   <img src='/images/xytopbar2.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\overrightarrow{xy}")}
                >
                   <img src='/images/xytopbar3.png' style={{ resize: 'cover' }}/>
                
                  
                </button>   

                   <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setText("\\cdot")}
                >
                   
                <Latex>$\cdot$</Latex>
                  
                </button>               
                        
            
            </div>       
         
            </div>
            <div style={{ width: '10%', marginRight: 20 }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("+")}
            >
            +
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("-")}
            >
            <Latex>$-$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("\\pm")}
            >
            <Latex>$\pm$</Latex>
            </button>
            


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("\\times")}
            >
            <Latex>$\times$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("\\div")}
            >
            <Latex>$\div$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("=")}
            >
            <Latex>$=$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("<")}
            >

           <img src='/images/lessden.png' style={{ resize: 'cover' }}/>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText(">")}
            >

           <img src='/images/geterthan.png' style={{ resize: 'cover' }}/>
            </button>           
          

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("$\ne$")}
            >
            <Latex>$\ne$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("\\le")}
            >
           <Latex>$\le$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("\\ge")}
            >
           <Latex>$\ge$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("\\equiv")}
            >
           <Latex>$\equiv$</Latex>
            </button> 
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("\\sim")}
            >
           <Latex>$\sim$</Latex>
            </button> 

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("\\approx")}
            >
           <Latex>$\approx$</Latex>
            </button>             

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("\\cong")}
            >
           <Latex>$\cong$</Latex>
            </button>             

            

                       
            

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("1")}
            >
           1
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("2")}
            >
           2
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setText("3")}
            >
           3
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("4")}
            >
           4
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("5")}
            >
           5
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("6")}
            >
           6
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("7")}
            >
           7
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("8")}
            >
           8
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("9")}
            >
           9
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("10")}
            >
           10
            </button>
            


            </div>

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("10")}
            >
           10
            </button>
              
            </div> 
            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\pi")}
            >
           &#960;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\theta")}
            >
            &#952;
            </button>


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Delta")}
            >
           &#916;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\alpha")}
            >
        &#945;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\beta")}
            >
               &#946;
          
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\nabla")}
            >
            &#8711;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\parallel")}
            >
           &#8741;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\perp")}
            >
          &#8869;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\angle")}
            >
            &#8736;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 , marginTop: 3}}
              onClick={() => setText("\\degree")}
            >
           &#8728;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\infty")}
            >
           &#8734;
            </button> 

                        <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\propto")}
            >
            &#8733;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftarrow")}
            >
            &#8592;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftarrow")}
            >
            &#8594;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >
           &#8596;
            </button>  

            </div>  

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >
             &alpha;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            > &beta;</button>
           
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            > &gamma;</button>
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&delta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&epsilon;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&zeta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&eta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&theta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&iota;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&kappa;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&lambda;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&mu;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&nu;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            > &xi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&omicron;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&pi;</button>  
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&rho;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&sigma;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            > &tau;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            > &upsilon;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&phi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            > &chi;</button> 
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            > &psi;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\leftrightarrow")}
            >&omega;</button>   
              
            </div> 

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\alpha A")}
            > <Latex>$\alpha A$</Latex> </button> 
              <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\alpha B")}
            > <Latex>$B$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Gamma")}
            > <Latex>$\Gamma$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Delta")}
            > <Latex>$\Delta$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\varepsilon E")}
            > <Latex>$E$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\zeta Z")}
            > <Latex>$Z$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\eta H")}
            > <Latex>$H$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Theta")}
            > <Latex>$\Theta$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\iota I")}
            > <Latex>$I$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\kappa K")}
            > <Latex>$K$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\lambda \\Lambda	")}
            > <Latex>$\lambda \Lambda	$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\mu M	")}
            > <Latex>$\mu M	$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\nu N")}
            > <Latex>$\nu N
            $</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Xi")}
            > <Latex>$\Xi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("O")}
            > <Latex>$O$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Pi")}
            > <Latex>$\Pi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\varrho P")}
            > <Latex>$\varrho P$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Sigma")}
            > <Latex>$\Sigma$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\tau T")}
            > <Latex>$\tau T$</Latex> </button> 

            
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Upsilon")}
            > <Latex>$\Upsilon$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Phi")}
            > <Latex>$\Phi$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\chi X")}
            > <Latex>$\chi X$</Latex> </button>   

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setText("\\Psi")}
            > <Latex>$\Psi X$</Latex> </button>   

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\Omega")}
> <Latex>$\Omega$</Latex> </button>       

            </div>

            <div style={{ width: '10%' }}>

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\subset")}
> <Latex>$\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\subseteq")}
> <Latex>$\subseteq$</Latex> </button>   


         <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\not\\subset")}
> <Latex>$\not\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\not\\subseteq")}
> <Latex>$\not\subseteq$</Latex> </button>  


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\supset")}
> <Latex>$\supset$</Latex> </button>  


            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\supseteq")}
> <Latex>$\supseteq$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\not\\supset")}
> <Latex>$\not\supset$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\not\\supseteq")}
> <Latex>$\not\supseteq$</Latex> </button>  
          


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\in")}
> <Latex>$\in$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\ni")}
> <Latex>$\ni$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\notin")}
> <Latex>$\notin$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\not\\ni")}
> <Latex>$\not\ni$</Latex> </button>  
            


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\cup")}
> <Latex>$\cup$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\cap")}
> <Latex>$\cap$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\forall")}
> <Latex>$\forall$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\exists")}
> <Latex>$\exists$</Latex> </button>  
            

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\not\\subset")}
> <Latex>$\vee$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\wedge")}
> <Latex>$\wedge$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\because")}
> <Latex>$\because$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setText("\\therefore")}
> <Latex>$\therefore$</Latex> </button>  
            
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic;
