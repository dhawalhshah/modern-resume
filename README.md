# Modern Resume
Modern Resume is a cross-browser, cross-device, responsive, semantic, server independent, buzz-word friendly resume template/framework.

Not all of these are true now. Much of it is still work in progress. 

## Mutiple resume problem
A jobseeker is required to have his/her resume in multiple formats - doc, pdf, txt, html(for online presence). For most of these formats the data is heavily tied into the format that they are displayed in. This results in multiple copies of the same resume which need to be maintained separately.

### Solution
All the resume data is stored in `resume.json` which is used by the controller to generate the page. Using a combination of print styles and other js libraries(jsPdf?) I believe resumes in other formats can be generated.  

## Technologies/Assets leveraged 
- [Angularjs](http://angularjs.org/) - Separation of data and view is achieved by using templating system provided by angular 
- [Sample Resume Template](http://sampleresumetemplate.net/) - The base template which provides the look and feel 
- [1140px CSS Grid](http://cssgrid.net/) - The base template was converted into this grid system to make the resume responsive. 
- [HTML 5 Microdata](http://schema.org/) - This vocabulary was used to markup data so that it is more search engine friendly 
- Icons - [Shapes4Free](http://www.shapes4free.com/vector-icons/external-link-icons/) for external link icon and [Icon Dock](http://www.shapes4free.com/vector-icons/external-link-icons/) for social media icons.

## Major To-do's
- Optimize the look and feel(css) for smaller screens 
- Generate documents in other formats 
