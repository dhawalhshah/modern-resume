function ResumeCtrl(){
    
    this.resume = {
        "order":['profile','topSkills','education','job'],
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
                "startDate":"2005-03-01",
                "endDate":"2007-08-01",
                "title":"Senior Interface Designer",
                "desc":"Intrinsicly enable optimal core competencies through corporate relationships. \n\
                Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence."
            },
            {
                "company": "Apple Inc",
                "startDate":"2005-03-01",
                "endDate":"2007-08-01",
                "title":"Senior Interface Designer",
                "desc":"Progressively reconceptualize multifunctional outside the box thinking through inexpensive methods of empowerment. Compellingly morph extensive niche markets with mission-critical ideas. Phosfluorescently deliver bricks-and-clicks strategic theme areas rather than scalable benefits."
            },
            {
                "company": "Microsoft",
                "startDate":"2004-01-01",
                "endDate":"2005-06-01",
                "title":"Principal and Creative Lead",
                "desc":"Intrinsicly transform flexible manufactured products without excellent intellectual capital. Energistically evisculate orthogonal architectures through covalent action items. Assertively incentivize sticky platforms without synergistic materials."
            },
            {
                "company": "International Business Machines (IBM)",
                "startDate":"2001-03-01",
                "endDate":"2005-07-01",
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
                "startDate":"2001-03-01",
                "endDate":"2005-08-01",
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
        },
        {
            "title":"Technical",
            "type":"skills",
            "name":"skills",
            "data":[ "XHTML","CSS", "Javascript", "Jquery","PHP","CVS/Subversion","OS X","Windows XP/Vista","Linux"]
        }
        ]
    
    };
       
     
    this.isLast = function(count,index){       
        if(count-1 == index)
        { 
            return "last";
        }
    };
    
    this.isBottom = function(count, index){
        if(!(count-1 == index))
        { 
            return "bottom";
        }        
    }
    this.getSection = function(name){        
        for( section in this.resume.sections){             
            if(this.resume.sections[section].name == name){               
                return this.resume.sections[section];
            }
        }
    };
    
    
}

var month=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

angular.filter('period',function(startDate,endDate){
    startDateObj = new Date(startDate);
    startTimeEl = document.createElement("time");
    startTimeEl.textContent = month[startDateObj.getMonth()] + ', ' + startDateObj.getFullYear();
    startTimeEl.setAttribute("datetime", startDate);
    
    this.$element.append( startTimeEl );
    this.$element.append(document.createTextNode(" - ") );
    
    if(endDate){
        endDateObj = new Date(endDate);
        endTimeEl = document.createElement("time");
        endTimeEl.textContent = month[endDateObj.getMonth()] + ', ' + endDateObj.getFullYear();
        endTimeEl.setAttribute("datetime", endDate)
         this.$element.append( endTimeEl );
    }
    else{
       this.$element.append(document.createTextNode("current"));
    }    
});

