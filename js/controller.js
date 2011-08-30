function ResumeCtrl($xhr){
    
    var self = this;
 
    $xhr('GET', 'js/resume.json', function(code, response) {
        self.resume = response;        
        console.log(self.resume); 
    });

   
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
    img.setAttribute("width","24px");
    img.setAttribute("height","24px");
    
    var a = document.createElement("a");
    a.setAttribute("href", network.url) ;       
    a.setAttribute("target","_blank");          
    a.setAttribute("class", "external")
    a.appendChild(img);
    
    return a;    
});

