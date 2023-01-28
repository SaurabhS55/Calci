let area1 = document.getElementById('area1');
            let area2 = document.getElementById('area2');
            let val = "";
        
            document.getElementById('n0').addEventListener('click', () => {
                val = val + "0";
                area1.innerText = val;
            });
            document.getElementById('n1').addEventListener('click', () => {
                val = val + "1";
                area1.innerText = val;
            });
            document.getElementById('n2').addEventListener('click', () => {
                val = val + "2";
                area1.innerText = val;
            });
            document.getElementById('n3').addEventListener('click', () => {
                val = val + "3";
                area1.innerText = val;
            });
            document.getElementById('n4').addEventListener('click', () => {
                val = val + "4";
                area1.innerText = val;
            });
            document.getElementById('n5').addEventListener('click', () => {
                val = val + "5";
                area1.innerText = val;
            });
            document.getElementById('n6').addEventListener('click', () => {
                val = val + "6";
                area1.innerText = val;
            });
            document.getElementById('n7').addEventListener('click', () => {
                val = val + "7";
                area1.innerText = val;
            });
            document.getElementById('n8').addEventListener('click', () => {
                val = val + "8";
                area1.innerText = val;
            });
            document.getElementById('n9').addEventListener('click', () => {
                val = val + "9";
                area1.innerText = val;
            });
            document.getElementById('add').addEventListener('click', () => {
                val = val + "+";
                area1.innerText = val;
            });
            document.getElementById('sub').addEventListener('click', () => {
                val = val + "-";
                area1.innerText = val;
            });
            document.getElementById('mul').addEventListener('click', () => {
                val = val + "*";
                area1.innerText = val;
            });
            document.getElementById('div').addEventListener('click', () => {
                val = val + "/";
                area1.innerText = val;
            });
            document.getElementById('nd').addEventListener('click', () => {
                val = val + ".";
                area1.innerText = val;
            });
            document.getElementById('rm').addEventListener('click', () => {
                let t=document.getElementById('area1').textContent;
                let t1=document.getElementById('area2').textContent;
                if(t1.length>0){
                    val=t1.slice(0,length-1);
                    area2.innerText=val;
                }
                else{
                val=t.slice(0,length-1);
                area1.innerText=val;}
            });
            document.getElementById('ans').addEventListener('click', () => {
                let r = eval(val);
                // area1.innerText = r;
                area2.innerText = r;
                val = r;
                // area2.innerText=""
            });
            document.getElementById('ac').addEventListener('click', () => {
                val = ""
                area1.innerText = val;
                area2.innerText=val;
            });
            document.getElementById('per').addEventListener('click', () => {
                val = val + "%";
                area1.innerText = val;
            });
            
       
            document.onkeyup=e=>{
                switch(e.key){
                    case "0": val=val+"0";
                              area1.innerText=val;
                              break;
                    case "1": val=val+"1";
                              area1.innerText=val;
                              break;    
                    case "2": val=val+"2";
                              area1.innerText=val;
                              break;    
                    case "3": val=val+"3";
                              area1.innerText=val;
                              break;    
                    case "4": val=val+"4";
                              area1.innerText=val;
                              break;    
                    case "5": val=val+"5";
                              area1.innerText=val;
                              break;    
                    case "6": val=val+"6";
                              area1.innerText=val;
                              break;    
                    case "7": val=val+"7";
                              area1.innerText=val;
                              break;    
                    case "8": val=val+"8";
                              area1.innerText=val;
                              break;    
                    case "9": val=val+"9";
                              area1.innerText=val;
                              break;    
                    case "+": val=val+"+";
                              area1.innerText=val;
                              break;    
                    case "-": val=val+"-";
                              area1.innerText=val;
                              break;    
                    case "*": val=val+"*";
                              area1.innerText=val;
                              break;    
                    case "/": val=val+"/";
                              area1.innerText=val;
                              break;    
                    case "Enter": let r = eval(val);
                              area2.innerText = r;
                              val = r;
                              break;    
                    case "%": val=val+"%";
                              area1.innerText=val;
                              break;    
                    case "Backspace": let t=document.getElementById('area1').textContent;
                                   let t1=document.getElementById('area2').textContent;
                                   if(t1.length>0){
                                    val=t1.slice(0,length-1);
                                    area2.innerText=val;
                                    }
                                   else{
                                    val=t.slice(0,length-1);
                                    area1.innerText=val;}
                              break;
                    case "Delete":    
                                        val = ""
                                    area1.innerText = val;
                                    area2.innerText=val;
                    default:
                        break;
                }
            }
            