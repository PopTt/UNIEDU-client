import React from 'react';
import PinItem from '../components/PinItem';
import Footer from '../components/Footer'
import ReactPlayer from 'react-player'
import './AboutUs.css';



 function AboutUs(){
    function showaids(){
        document.getElementById("aids").style.display = "block";
    }
    
    function showhis(){
        document.getElementById("ourhistory").style.display = "block";
        document.getElementById("ourfounders").style.display = "none";
        document.getElementById("ourbranches").style.display = "none";
    }
    function showfou(){
        document.getElementById("ourhistory").style.display = "none";
        document.getElementById("ourfounders").style.display = "block";
        document.getElementById("ourbranches").style.display = "none"; 
    }
    function showbranc(){
        document.getElementById("ourhistory").style.display = "none";
        document.getElementById("ourfounders").style.display = "none";
        document.getElementById("ourbranches").style.display = "block";
    }
    function showloc(){
        var l = document.getElementById("loc").value;
        if(l === "Selangor"){
            document.getElementById("showsel").style.display = "block";
            document.getElementById("showkua").style.display = "none";
            document.getElementById("showpera").style.display = "none";
            document.getElementById("showjoh").style.display = "none";
            document.getElementById("showpah").style.display = "none";
            document.getElementById("showperl").style.display = "none";
        }else if(l === "KualaLumpur"){
            document.getElementById("showsel").style.display = "none";
            document.getElementById("showkua").style.display = "block";
            document.getElementById("showpera").style.display = "none";
            document.getElementById("showjoh").style.display = "none";
            document.getElementById("showpah").style.display = "none";
            document.getElementById("showperl").style.display = "none";
        }else if(l === "Perak"){
            document.getElementById("showsel").style.display = "none";
            document.getElementById("showkua").style.display = "none";
            document.getElementById("showpera").style.display = "block";
            document.getElementById("showjoh").style.display = "none";
            document.getElementById("showpah").style.display = "none";
            document.getElementById("showperl").style.display = "none";
        }else if(l === "Johor"){
            document.getElementById("showsel").style.display = "none";
            document.getElementById("showkua").style.display = "none";
            document.getElementById("showpera").style.display = "none";
            document.getElementById("showjoh").style.display = "block";
            document.getElementById("showpah").style.display = "none";
            document.getElementById("showperl").style.display = "none";
        }else if(l === "Pahang"){
            document.getElementById("showsel").style.display = "none";
            document.getElementById("showkua").style.display = "none";
            document.getElementById("showpera").style.display = "none";
            document.getElementById("showjoh").style.display = "none";
            document.getElementById("showpah").style.display = "block";
            document.getElementById("showperl").style.display = "none";
        }else if(l === "Perlis"){
            document.getElementById("showsel").style.display = "none";
            document.getElementById("showkua").style.display = "none";
            document.getElementById("showpera").style.display = "none";
            document.getElementById("showjoh").style.display = "none";
            document.getElementById("showpah").style.display = "none";
            document.getElementById("showperl").style.display = "block";
        }
    }
    function H_iglink(){
        window.location.href="https://www.instagram.com/lun8141/";
    }function Y_iglink(){
        window.location.href="https://www.instagram.com/iwannabestrong_cheng/";
    }function W_iglink(){
        window.location.href="https://www.instagram.com/mwei_10141106/";
    }function T_iglink(){
        window.location.href="https://www.instagram.com/ennn_0401/";
    }

     return(
         
        
        <div id="whole">
            <div id="top"><h1 id = "title">About Us</h1>
            <form id = "selection">
                <div id = "history" onClick={showhis}><PinItem
                src = 'resources/images/History.png' 
                text='Our History'
                label='Know Us More'>
                </PinItem></div>
                <div id = "founders" onClick={showfou}><PinItem
                src = 'resources/images/founders.jpg' 
                text='Our Founders'
                label='Inspiration'>
                </PinItem></div>
                <div id = "locations" onClick={showbranc}><PinItem
                src = 'resources/images/location.gif' 
                text='Our Branches'
                label='Location'>
                </PinItem></div>
            </form></div>
            <div id="show">
                <div id="ourhistory" > 
                    <p id="title">Our History</p>
                    <video id="v_h"src='resources/videos/u_his.mp4' width="1000" height="800" autoplay controls></video>
                    
                </div>
                <div id="ourfounders">
                <p id="title">Our Founders</p>
                    <div id = "img"><img  src='resources/images/HoWaiLun.jpeg' width='350' height= '400' alt='HoWaiLun'  onClick={H_iglink}></img>
                    <h3>HO WAI LUN</h3><h4>20ACB01430</h4></div>
                    <div id = "img"><img src='resources/images/YeongYiCheng.jpg' width='350' height= '400' alt='YeongYiCheng' onClick={Y_iglink}></img>
                    <h3>YEONG YI CHENG</h3><h4>20ACB01274</h4></div>
                    <div id = "img"><img src='resources/images/WongMinWei.jpg' width='350' height= '400' alt='WongMinWei' onClick={W_iglink}></img>
                    <h3>WONG MIN WEI</h3><h4>20ACB02932</h4></div>
                    <div id = "img"><img src='resources/images/TehMingEn.jpg' width='350' height= '400' alt='TehMingEn' onClick={T_iglink}></img>
                    <h3>TEH MING EN</h3><h4>19ACB02716</h4></div>
                    
                </div>
                <div id="ourbranches" >
                <p id="title">Our Branches</p>
                <label id="findloc">Find the branches in your location: <select id='loc' onChange={showloc} >
                <option value='Selangor'>Selangor</option>
                <option value='KualaLumpur'>Kuala Lumpur</option>
                <option value='Perak'>Perak</option>
                <option value='Johor'>Johor</option>
                <option value='Pahang'>Pahang</option>
                <option value='Perlis'>Perlis</option>
                <option value='' selected>Select Your State</option></select> </label>
                <div id = "showsel" >
                    <table border = '2' id="loc_t">
                        <tr><td >Jalan Mutira, 48000 Rawang, Selangor</td><td>Tel: 03-22332233</td></tr>
                    <tr><td >Jalan Maxwell, Rawang, Selangor</td><td>Tel: 03-22532233</td></tr>
                    <tr><td >Jalan Micro, Petaling Jaya, Selangor</td><td>Tel: 03-2789033</td></tr>
                    <tr><td >No. 2112, KM2, Jalan Meru, 41050 Klang, Selangor</td><td>Tel: 03-9925333</td></tr>
                    <tr><td >Seksyen 9, 40100 Shah Alam, Selangor</td><td>Tel: 03-4475333</td></tr>
                    </table></div>
                <div id = "showkua" >
                    <table border = '2'>
                    <tr><td >Lingkaran Syed Putra, Mid Valley City, 59200 Kuala Lumpur</td><td>Tel: 03-55673338</td></tr>
                    <tr><td >Bukit Bintang St, Bukit Bintang, 55100 Kuala Lumpur</td><td>Tel: 03-4921363</td></tr>
                    <tr><td >Suria KLCC, Kuala Lumpur City Centre, 50088 Kuala Lumpur</td><td>Tel: 03-1115333</td></tr>
                    </table> </div>
                <div id = "showpera" ><p>Jalan Universiti, Bandar Barat, 31900 Kampar, Perak</p>
                    <p>Tel: 03-1127110</p></div>
                <div id = "showjoh" ><p> Bandar Indahpura, 81000 Kulai, Johor</p>
                    <p>Tel: 03-9836888</p></div>
                <div id = "showpah" ><p>Jln Star City 1, 28000 Mentakab, Pahang</p>
                    <p>Tel: 03-2326888</p></div>
                <div id = "showperl" ><p>Jalan Penjara, Pusat Bandar Kangar, 01604 Kangar, Perlis</p>
                    <p>Tel: 03-2344111</p></div>
                </div>
                <div id="otherinfo"> 
                <p id = "title">#uniEdu</p>
                <iframe id="taggbox" src="https://widget.taggbox.com/68675" title=" Instagram Post with #uniEdu"></iframe>
                <h2 id="edu_imp"onClick={showaids}>Why is education important?</h2>
                <div className="aboutus__video">
                <ReactPlayer id="aids" url='https://www.youtube.com/watch?v=CHyA3pp4G_Y' /></div>
                </div>
                
            </div>
            
            <Footer />
        </div>

     )
     
     
 }
 
 
 export default AboutUs