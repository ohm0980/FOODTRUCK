function rice(){
    let ri=document.getElementById('ri').value;
    let num=Number(ri)
    let pl=(num+1)
    document.getElementById('ri').value=(pl);
}
//egg\\
function egg(){
    let eg=document.getElementById('eg').value;
    let num=Number(eg)
    let pl=(num+1)
    document.getElementById('eg').value=(pl);
}
//VAGETABLE\\
function veg(){
    let ri=document.getElementById('veg').value;
    let num=Number(ri)
    let pl=(num+1)
    document.getElementById('veg').value=(pl);
}
//Fveg\\
function fil(){
    let ri=document.getElementById('fveg').value;
    let num=Number(ri)
    let pl=(num+1)
    document.getElementById('fveg').value=(pl);
}

//clear\\
function clea(){
    document.getElementById('ri').value="";
    document.getElementById('eg').value="";
    document.getElementById('veg').value="";
    document.getElementById('fveg').value="";
}function get(){
    let r=document.getElementById('ri').value;
    let e=document.getElementById('eg').value;
    let v=document.getElementById('veg').value;
    let f=document.getElementById('fveg').value;
    let numr=Number(r)
    let nume=Number(e)
    let numv=Number(v)
    let numf=Number(f)
    let rr=numr*10
    let re=nume*15
    let rv=numv*35
    let rf=numf*45
    let rrn=Number(rr)
    let ren=Number(re)
    let rvn=Number(rv)
    let rfn=Number(rf)
    let plu=(rrn+ren+rvn+rfn)
    document.getElementById('ruam').value=(plu)
}//function jai(){
    //let n=document.getElementById('ruam').value
    //let rubma=prompt("ราคารวม"+":"+n+" "+"กรุณากรอกเงินที่รับมา"+" "+"!!!กรุรารีบปิดลิ้นชัก!!!")
   // let nu=Number(rubma)
   // let torn=(nu-n)
  //  alert("เงินทอน"+":"+torn)
 ///   document.getElementById('ri').value="";
 //   document.getElementById('eg').value="";
   // document.getElementById('veg').value="";
   // document.getElementById('fveg').value="";
   // document.getElementById('ruam').value="";
//}

function jai(){
    let n=document.getElementById('ruam').value
    let rubma=prompt("ราคารวม"+":"+n+" "+"กรุณากรอกเงินที่รับมา")
    let nu=Number(rubma)
    let nc=Number(n)
    let torn=(nu-n)
    if(nu<nc){
        confirm("กรุณากรอกจำนวนเงินที่ถูกต้อง\nจำนวนเงินที่ถูกต้อง : "+n+"\n"+"จำนวนเงินที่คุณกรอก : "+nu)
    }else{
        let as = prompt("กรุณากรอกรหัสลิ้นชัก")
        if(as=="331040"){
            alert("เงินทอน"+" : "+torn+"  !!คำเตือนกรุณาปิดลิ้นชัก!!")
            document.getElementById('ri').value="";
            document.getElementById('eg').value="";
            document.getElementById('veg').value="";
            document.getElementById('fveg').value="";
            document.getElementById('ruam').value="";
        }else{
            alert("รหัสลิ้นชักผิดพลาด")
        }
    }
}