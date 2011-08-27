function ResumeCtrl(){
    
    this.resume = {
        "order":['profile','topSkills','education','job'],
        "about":{
            "name":"Jonathan Doe",
            "title":"Web Designer, Director",
            "email":"name@yourdomain.com",
            "phone":"(313) - 867-5309",        
            "social":[
            {
                "icon":"google-plus.png",
                "url":"http://www.google.com",
                "title":"Google+"
            },
            {
                "icon":"facebook.png",
                "url":"http://www.facebook.com",
                "title":"Facebook"
            },
            {
                "icon":"github.png",
                "url":"http://www.githunb.com",
                "title":"Github"
            }
            ]
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
                "url":"http://www.facebook.com",
                "title":"Senior Interface Designer",
                "desc":"Intrinsicly enable optimal core competencies through corporate relationships. \n\
                Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence."
            },
            {
                "company": "Apple Inc",
                "startDate":"2005-03-01",
                "endDate":"2007-08-01",
                "url":"http://www.apple.com",              
                "title":"Senior Interface Designer",
                "desc":"Progressively reconceptualize multifunctional outside the box thinking through inexpensive methods of empowerment. Compellingly morph extensive niche markets with mission-critical ideas. Phosfluorescently deliver bricks-and-clicks strategic theme areas rather than scalable benefits."
            },
            {
                "company": "Microsoft",
                "startDate":"2004-01-01",
                "endDate":"2005-06-01",
                "url":"http://www.microsoft.com", 
                "title":"Principal and Creative Lead",
                "desc":"Intrinsicly transform flexible manufactured products without excellent intellectual capital. Energistically evisculate orthogonal architectures through covalent action items. Assertively incentivize sticky platforms without synergistic materials."
            },
            {
                "company": "International Business Machines (IBM)",
                "startDate":"2001-03-01",
                "endDate":"2005-07-01",
                "url":"http://www.ibm.com",
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
       
    this.assets = {
        'external' : 'images/external.png'
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

// The period filter is used to format the start and endate for a job/education
// It uses <time> element nodes and appropriate HTML5 microdata.
angular.filter('period',function(startDate,endDate){
    
    // Appending the start date
    var startDateObj = parseDate(startDate);
    var startTimeEl = document.createElement("time");
    startTimeEl.textContent = month[startDateObj.getMonth()] + ', ' + startDateObj.getFullYear();
    startTimeEl.setAttribute("datetime", startDate);
    startTimeEl.setAttribute("itemprop", "startDate");
    this.$element.append( startTimeEl );
    
    // Appending the period seperator
    this.$element.append(document.createTextNode(" - ") );
    
    if(endDate){
        // Appending the start date
        var endDateObj = parseDate(endDate);
        var endTimeEl = document.createElement("time");
        endTimeEl.textContent = month[endDateObj.getMonth()] + ', ' + endDateObj.getFullYear();
        endTimeEl.setAttribute("datetime", endDate);
        endTimeEl.setAttribute("itemprop", "endDate");
        this.$element.append( endTimeEl );
    }
    else{
        // No End date it means it's current
        this.$element.append(document.createTextNode("current"));
    }    
});

//  Function to parse date to fix the safari bug
//  taken from http://stackoverflow.com/questions/3085937/safari-js-cannot-parse-yyyy-mm-dd-date-format
function parseDate(input, format) {
    format = format || 'yyyy-mm-dd'; // default format
    var parts = input.match(/(\d+)/g), 
    i = 0, fmt = {};
    // extract date-part indexes from the format
    format.replace(/(yyyy|dd|mm)/g, function(part) {
        fmt[part] = i++;
    });

    return new Date(parts[fmt['yyyy']], parts[fmt['mm']]-1, parts[fmt['dd']]);
}

angular.filter('microdata',function(item,itemprop,itemptype){
    if(typeof item != 'undefined'){
        this.$element.text(item)
    }

    if(typeof itemprop != 'undefined'){
        this.$element.attr("itemprop",itemprop);
    }

    if(typeof itemtype != 'undefined'){
        this.$element.attr("itemscope");
        this.$element.attr("itemtype","http://schema.org/" + itemtype);
    }

});

// Generates links and icon to external websites
angular.filter('external',function(url){
    if(typeof url == 'undefined'){
        return;
    }
    
    var img =document.createElement("img") ;
    img.setAttribute("src", this.assets.external) ;
    
    var a = document.createElement("a");
    a.setAttribute("href", url) ;       
    a.setAttribute("target","_blank");         
    a.setAttribute("class", "external")
    a.appendChild(img);
    
    this.$element.append( a );
});

// Generates links and icons for social networks
angular.filter('social',function(network){
    
    if(typeof network == 'undefined'){
        return;
    }
    var img =document.createElement("img") ;
    img.setAttribute("src", 'images/' + network.icon) ;
    img.setAttribute("title",network.title);
    
    var a = document.createElement("a");
    a.setAttribute("href", network.url) ;       
    a.setAttribute("target","_blank");          
    a.setAttribute("class", "external")
    a.appendChild(img);
    
    return a;    
});

