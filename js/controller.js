/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function ResumeCtrl(){
    
    this.resume = {
        "about":{
            "name":"Jonathan Doe",
            "title":"Web Designer, Director",
            "email":"name@yourdomain.com",
            "phone":"(313) - 867-5309"            
        },
        "sections":
        [
        {
            "title":"Profile",
            "type":"profile",
            "name":'profile',  
            "data":'"Progressively evolve cross-platform ideas before impactful infomediaries. Energistically visualize tactical initiatives before cross-media catalysts for change.'
        },
        {
            "title":"Experience",
            "type":"job",
            "name":'job',
            "data":[
            {
                "company": "Facebook",
                "date":"2005-2007",
                "title":"Senior Interface Designer",
                "desc":"Intrinsicly enable optimal core competencies through corporate relationships. \n\
                Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence."
            },
            {
                "company": "Apple Inc",
                "date":"2005-2007",
                "title":"Senior Interface Designer",
                "desc":"Progressively reconceptualize multifunctional outside the box thinking through inexpensive methods of empowerment. Compellingly morph extensive niche markets with mission-critical ideas. Phosfluorescently deliver bricks-and-clicks strategic theme areas rather than scalable benefits."
            },
            {
                "company": "Microsoft",
                "date":"2004-2005",
                "title":"Principal and Creative Lead",
                "desc":"Intrinsicly transform flexible manufactured products without excellent intellectual capital. Energistically evisculate orthogonal architectures through covalent action items. Assertively incentivize sticky platforms without synergistic materials."
            },
            {
                "company": "International Business Machines (IBM)",
                "date":"2001-2004",
                "title":"Lead Web Designer",
                "desc":"Globally re-engineer cross-media schemas through viral methods of empowerment. Proactively grow long-term high-impact human capital and highly efficient innovation. Intrinsicly iterate excellent e-tailers with timely e-markets."
            }
            ]
        },
        {
            "title":"Education",
            "type":"edu",
            "name":'education',
            "data":[
            {
                "university":"Indiana University - Bloomington, Indiana",
                "date":"2001-2004",
                "degree":"Dual Major, Economics and English",
                "gpa" : "4.0"
            }
            ]
        },
        {
            "title":"Skills",
            "type":"topSkills",
            "name":'topSkills',
            "data":[
            {
                "skill":"Web Design",
                "desc":"Assertively exploit wireless initiatives rather than synergistic core competencies."
            },
            {
                "skill":"Interface Design",
                "desc":"Credibly streamline mission-critical value with multifunctional functionalities"
            },
            {
                "skill":"Project Direction",
                "desc":"Proven ability to lead and manage a wide variety of design and development projects in team and independent situations."
            }
            ]
        }
        ]
    
    };
       
    this.skills = [
    "XHTML","CSS", "Javascript", "Jquery","PHP","CVS/Subversion","OS X","Windows XP/Vista","Linux"
    ];
  
    
    this.isLast = function(count,index){
        console.log("Count : " + count + " Index " + index);
        if(count-1 == index)
        { 
            return "last";
        }
    };
    
    
}

