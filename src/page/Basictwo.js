/* import "./basic.scss"; */
var Latex = require('react-latex');

const Basictwo = ({ setTexttwo }) => {

  const abag =() => {
   // let val = '\\frac{1}{n^s}';
    let val = '\\frac{}{}';
    setTexttwo(val);
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
                      //onClick={() => setTexttwo("$a^2$")}
                      onClick={() => setTexttwo("^2")}
                      //\[ a_1^2 + a_2^2 = a_3^2 \]
                    >
                      a<sup>2</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                    // onClick={() => setTexttwo("$a^2$")}
                      onClick={() => setTexttwo("a_2")}
                    >
                      a<sup>x</sup>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTexttwo("a_2")}
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
                      onClick={() => setTexttwo("a_{n_i}")}
                    >
                  <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/788cc816a1e89c4c67e119100121f340f9716dca"/>
                    </button>
                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTexttwo("\\sqrt[x]{a}")}
                    >
                      <img src='/images/arot.png' />
                    </button>

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTexttwo("\\sqrt{3}")}
                    >
                      &#8730;a
                    </button>    

                    <button
                      variant="outlined"
                      style={{ marginRight: 5, border: 'none', width: 38 }}
                      onClick={() => setTexttwo("\\frac{\\partial x}{\\partial y}")}
                    >
                      <img src='/images/delxdely.png' />  
                    </button>    
                    

            </div>  
            <div style={{ width: '100%' }}>
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\left|x\\right|")}
                >
              <Latex>$\left|x\right|$</Latex>
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\lceil x\\rceil")}
                >
              <Latex>$\lceil x\rceil$</Latex>
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\lfloor x\\rfloor")}
                >
              <Latex>$\lfloor x\rfloor$ </Latex>
                </button>  
                         

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\int_{a}^{b}")}
                >
                   <img src='/images/function.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\sum_{n=1}^{1}")}
                >
                   <img src='/images/sumfun.png' />
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>               
                  
            </div>  
            <div style={{ width: '100%', display: 'flex' }}>
            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\lim_{x\\to\\infty}")}
                >
                   <img src='/images/limit.png' />
                </button>               
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\prod_{n=1}^{1}")}
                >
                   <img src='/images/del.png' />
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38, fontSize: 11 }}
                  onClick={() => setTexttwo("\\log_xy")}
                >
                  {/*  <img src='/images/logxy.png' /> */} <Latex>$\log_xy$</Latex>
                </button>   

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\frac{dx}{dy}")}
                >
                   <img src='/images/dxdy.png' />
                </button>   

            </div> 
            <div style={{ width: '100%' }}>

            <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\oint_{i=1}^n")}
                >
                  <img src='/images/funi.png' style={{ resize: 'cover', width: 38, height: 30 }}/>
                  
                </button>  
                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\overleftarrow{xy}")}
                >
                   <img src='/images/xytopbar.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\overline{xy}")}
                >
                   <img src='/images/xytopbar2.png' style={{ resize: 'cover' }}/>
                
                  
                </button>  

                <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\overrightarrow{xy}")}
                >
                   <img src='/images/xytopbar3.png' style={{ resize: 'cover' }}/>
                
                  
                </button>   

                   <button
                  variant="outlined"
                  style={{ marginRight: 5, border: 'none', width: 38 }}
                  onClick={() => setTexttwo("\\cdot")}
                >
                   
                <Latex>$\cdot$</Latex>
                  
                </button>               
                        
            
            </div>       
         
            </div>
            <div style={{ width: '10%', marginRight: 20 }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("+")}
            >
            +
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("-")}
            >
            <Latex>$-$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("\\pm")}
            >
            <Latex>$\pm$</Latex>
            </button>
            


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("\\times")}
            >
            <Latex>$\times$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("\\div")}
            >
            <Latex>$\div$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("=")}
            >
            <Latex>$=$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("<")}
            >

           <img src='/images/lessden.png' style={{ resize: 'cover' }}/>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo(">")}
            >

           <img src='/images/geterthan.png' style={{ resize: 'cover' }}/>
            </button>           
          

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("$\ne$")}
            >
            <Latex>$\ne$</Latex>
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("\\le")}
            >
           <Latex>$\le$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("\\ge")}
            >
           <Latex>$\ge$</Latex>
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("\\equiv")}
            >
           <Latex>$\equiv$</Latex>
            </button> 
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("\\sim")}
            >
           <Latex>$\sim$</Latex>
            </button> 

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("\\approx")}
            >
           <Latex>$\approx$</Latex>
            </button>             

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("\\cong")}
            >
           <Latex>$\cong$</Latex>
            </button>             

            

                       
            

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("1")}
            >
           1
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("2")}
            >
           2
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 }}
              onClick={() => setTexttwo("3")}
            >
           3
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("4")}
            >
           4
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("5")}
            >
           5
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("6")}
            >
           6
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("7")}
            >
           7
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("8")}
            >
           8
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("9")}
            >
           9
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("10")}
            >
           10
            </button>
            


            </div>

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("10")}
            >
           10
            </button>
              
            </div> 
            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\pi")}
            >
           &#960;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\theta")}
            >
            &#952;
            </button>


            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Delta")}
            >
           &#916;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\alpha")}
            >
        &#945;

            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\beta")}
            >
               &#946;
          
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\nabla")}
            >
            &#8711;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\parallel")}
            >
           &#8741;
            </button>

            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\perp")}
            >
          &#8869;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\angle")}
            >
            &#8736;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38 , marginTop: 3}}
              onClick={() => setTexttwo("\\degree")}
            >
           &#8728;
            </button>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\infty")}
            >
           &#8734;
            </button> 

                        <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\propto")}
            >
            &#8733;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftarrow")}
            >
            &#8592;
            </button>        
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftarrow")}
            >
            &#8594;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >
           &#8596;
            </button>  

            </div>  

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >
             &alpha;
            </button>  
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            > &beta;</button>
           
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            > &gamma;</button>
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&delta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&epsilon;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&zeta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&eta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&theta;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&iota;</button> 
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&kappa;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&lambda;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&mu;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&nu;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            > &xi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&omicron;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&pi;</button>  
           <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&rho;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&sigma;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            > &tau;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            > &upsilon;</button> 
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&phi;</button>  
          <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            > &chi;</button> 
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            > &psi;</button>  
         <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\leftrightarrow")}
            >&omega;</button>   
              
            </div> 

            <div style={{ width: '15%' }}>
            <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\alpha A")}
            > <Latex>$\alpha A$</Latex> </button> 
              <button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\alpha B")}
            > <Latex>$B$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Gamma")}
            > <Latex>$\Gamma$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Delta")}
            > <Latex>$\Delta$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\varepsilon E")}
            > <Latex>$E$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\zeta Z")}
            > <Latex>$Z$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\eta H")}
            > <Latex>$H$</Latex> </button> 
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Theta")}
            > <Latex>$\Theta$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\iota I")}
            > <Latex>$I$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\kappa K")}
            > <Latex>$K$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\lambda \\Lambda	")}
            > <Latex>$\lambda \Lambda	$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\mu M	")}
            > <Latex>$\mu M	$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\nu N")}
            > <Latex>$\nu N
            $</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Xi")}
            > <Latex>$\Xi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("O")}
            > <Latex>$O$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Pi")}
            > <Latex>$\Pi$</Latex> </button> 


<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\varrho P")}
            > <Latex>$\varrho P$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Sigma")}
            > <Latex>$\Sigma$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\tau T")}
            > <Latex>$\tau T$</Latex> </button> 

            
<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Upsilon")}
            > <Latex>$\Upsilon$</Latex> </button> 



<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Phi")}
            > <Latex>$\Phi$</Latex> </button> 

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\chi X")}
            > <Latex>$\chi X$</Latex> </button>   

<button
              variant="outlined"
              style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
              onClick={() => setTexttwo("\\Psi")}
            > <Latex>$\Psi X$</Latex> </button>   

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\Omega")}
> <Latex>$\Omega$</Latex> </button>       

            </div>

            <div style={{ width: '10%' }}>

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\subset")}
> <Latex>$\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\subseteq")}
> <Latex>$\subseteq$</Latex> </button>   


         <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\not\\subset")}
> <Latex>$\not\subset$</Latex> </button>  

<button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\not\\subseteq")}
> <Latex>$\not\subseteq$</Latex> </button>  


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\supset")}
> <Latex>$\supset$</Latex> </button>  


            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\supseteq")}
> <Latex>$\supseteq$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\not\\supset")}
> <Latex>$\not\supset$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\not\\supseteq")}
> <Latex>$\not\supseteq$</Latex> </button>  
          


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\in")}
> <Latex>$\in$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\ni")}
> <Latex>$\ni$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\notin")}
> <Latex>$\notin$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\not\\ni")}
> <Latex>$\not\ni$</Latex> </button>  
            


            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\cup")}
> <Latex>$\cup$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\cap")}
> <Latex>$\cap$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\forall")}
> <Latex>$\forall$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\exists")}
> <Latex>$\exists$</Latex> </button>  
            

            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\not\\subset")}
> <Latex>$\vee$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\wedge")}
> <Latex>$\wedge$</Latex> </button>  
           
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\because")}
> <Latex>$\because$</Latex> </button>  
            
            <button
variant="outlined"
style={{ marginRight: 5, border: 'none', width: 38, marginTop: 3 }}
onClick={() => setTexttwo("\\therefore")}
> <Latex>$\therefore$</Latex> </button>  
            
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Basictwo;
