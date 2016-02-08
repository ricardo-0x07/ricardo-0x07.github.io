/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Clive R. Cadogan",
    "role": "Front-End Guru",
    "welcomemessage": "Dare to be more, today!",
    "location": "Chaguanas, Trinidad and Tobago",
    "contacts": {
        "mobile": "868-724-4315",
        "email": "clive.cadogan@Sortyfied.com",
        "github": "ricardo-0x07",
        "twitter": "@ricardo_0x07",
        "location": "Chaguanas, Trinidad and Tobago"
    },
    "skills": ["Java", "C", "C++", "JS", "HTML", "CSS", "GWT", "Maven", "SQL", "Hibernate", "Spring"],
    "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAaNAAAAJGQ2ZTBhNGVlLTBkZmMtNDY3Ni05NDZkLTFhYTFhOWViNTY0OA.jpg"
};

var work = {
    "jobs": [{
        "employer": "The Power Generation Company of Trinidad and Tobago Ltd",
        "title": "Project Manager",
        "location": "Couva, Point Lisas, Trinidad and Tobago",
        "dates": "2008 - present",
        "description": "PowerGen is one of the largest Independent Power Producers (IPP) in Trinidad and Tobago. When I joined as part of a drive to utilize formal project management to improve the management its numerous major maintenance projects. I was hired mainly to contribute to the development of a methodology for the project management of major maintenance projects because of my industry experience and MSc research in this area. I have since contributed to the development of this methodology and managed several successful major turnaround projects. I was able to continually develop, improve and implement systems, tools and strategies that support the continual improvement in the management of my projects."
    }, {
        "employer": "The Guyana Power and Light Company Ltd",
        "title": "Electrical Engineer",
        "location": "Georgetown, Guyana",
        "dates": "2004 - 2007",
        "description": "GPL is the electric utility that generates, transmits, distributes and provides electric power for the Republic of Guyana in South America. I started there, as part of an initiative in 2004 to develop a fresh cadre of engineering leaders to support needs across the organization. While at GPL I planned and executed system planning and design, system expansion, system study, future expansion projects and work as part of the execution team for their UNDP funded UEAP project.  "
    }, {
        "employer": "Banks DIH Ltd",
        "title": "Electrical Engineer",
        "location": "Georgetown, Guyana",
        "dates": "2002 - 2004",
        "description": "This is where my engineering career started. Banks DIH Ltd is a food and beverage manufacturer company in Guyana – South America. I first work for this company during my one-year industrial internship as part of my engineering diploma. During that internship I was able apply a lot of what I had learned and was able to bridge the gap between knowing and doing it was exhilarating. This is where I realize my passion for engineering.<br/> After graduating from university in 2002 I was more than excited as I returned they to commence my career as an electrical engineer.This job got me interested in project management as discipline.As I was involved in more and more complex projects I began to understand the value it can be used to create by systematically solving problems and implementing solutions in a collaborative environment.We were able identify opportunities and implement solutions to improve the production processes, gradually automating and improving the production processes."
    }]
};

var projects = {
    "projects": [
                    {
                        "title": "Sortyfied Landing Page",
                        "dates": "January 2016",
                        "description": "Created as part of the solution interview phase of my start-up Sortyfied.",
                        "images": ["images/sortyfied.png"]

                    }, {
                        "title": "Portfolio",
                        "dates": "January 2016",
                        "description": "Created to present a portfolio of my Front-End development work.",
                        "images": ["images/portfolio.png"]

                    }, {
                        "title": "MoneyLinx.com",
                        "dates": "January 2016",
                        "description": "Created to easily send money to family members in need.",
                        "images": ["http://placekitten.com/g/1280/800"]
                    }
    ]

};

var education = {
    "schools": [{
        "name": "The University of the West Indies",
        "location": "St Augustine, Trinidad and Tobago",
        "degree": "Masters of Science",
        "majors": ["Project Management"],
        "dates": 2009,
        "url": "http://sta.uwi.edu/"
    }, {
        "name": "The University of Guyana",
        "location": "Georgetown, Guyana",
        "degree": "Bachelors of Engineering",
        "majors": ["Electrical Engineering"],
        "dates": 2002,
        "url": "http://www.uog.edu.gy/"
    }],
    "onlineCourses": [{
        "title": "Frontend Web Developer Nanodegree",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/"
    }]
};

bio.displayBio = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    // $("#header").prepend(formattedRole);
    // $("#header").prepend(formattedName);
    $("#name").prepend(formattedName);
    $("#role").prepend(formattedRole);


    var biopicFormatted = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(biopicFormatted);

    $("#header").append(HTMLbioOverview);
    $(".full-name").append(formattedName);
    $(".title").append(formattedRole);
    // $(".location-div").append(HTMLbioLocation.replace("%data%",bio.location));

    $("#header").append(HTMLtopContactsStart);


    var welcomeMsgFormatted = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
    $("#header").append(welcomeMsgFormatted);

        if(bio.skills.length > 0) {
        $("#skills-container").append(HTMLskillsStart);
        var formatedSkills = [];
        var i;
        for (i in bio.skills) {
            // formatedkills[i] = HTMLskills;
          formatedSkills[i] = HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(formatedSkills[i]);
        }
    }
}

bio.displayBio();

work.displayWork = function(){
    var job;
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer) + HTMLworkTitle.replace("%data%",work.jobs[job].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
    }

    var fomatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var fomatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var fomatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var fomatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var fomatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(fomatedMobile);
    $("#topContacts").append(fomatedEmail);
    $("#topContacts").append(fomatedTwitter);
    $("#topContacts").append(fomatedGithub);
    $("#topContacts").append(fomatedLocation);

    $("#footerContacts").append(fomatedMobile);
    $("#footerContacts").append(fomatedEmail);
    $("#footerContacts").append(fomatedTwitter);
    $("#footerContacts").append(fomatedGithub);
    $("#footerContacts").append(fomatedLocation);

}

work.displayWork();

projects.display = function() {

            $("#carousel-one").append(HTMLprojectCarouselImage.replace("%data%",projects.projects[0].images[0]));
            $("#carousel-one").append(HTMLprojectCarouselCaption);

            $(".project-text-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[0].title));
            $(".project-text-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[0].description));
            $(".project-text-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[0].dates));


            $("#carousel-two").append(HTMLprojectCarouselImage.replace("%data%",projects.projects[1].images[0]));
            $("#carousel-two").append(HTMLprojectCarouselCaption);

            $(".project-text-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[1].title));
            $(".project-text-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[1].description));
            $(".project-text-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[1].dates));


            $("#carousel-three").append(HTMLprojectCarouselImage.replace("%data%",projects.projects[2].images[0]));
            $("#carousel-three").append(HTMLprojectCarouselCaption);

            $(".project-text-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[2].title));
            $(".project-text-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[2].description));
            $(".project-text-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[2].dates));
}

projects.display();

education.displayEducation = function() {
    education.schools.forEach(
        function (school) {
            $("#education").append(HTMLschoolStart);

            $(".education-entry:last").append(HTMLschoolName.replace("%data%",school.name) + HTMLschoolDegree.replace("%data%",school.degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%",school.dates) );
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",school.location) );
            school.majors.forEach(
                function(major) {
                 $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",major) );

                });


        });

    $("#education").append(HTMLschoolStart);

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    education.onlineCourses.forEach(
        function (onlineCourse) {
            $("#education").append(HTMLschoolStart);

            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",onlineCourse.title) + HTMLonlineSchool.replace("%data%",onlineCourse.school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%",onlineCourse.dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%",onlineCourse.url));

        });
}

education.displayEducation();

$("#mapDiv").append(googleMap);

$("#map-h2").click(function(){
                    $("#mapDiv").fadeToggle('fast');
                });

// Source: https://css-tricks.com/full-jquery-animations/
$("#map-h2").hover(
                    function(){$(this).css({"color" : "#23527c","text-decoration" : "underline"})},
                    function(){$(this).css({"color" : "#23527c","text-decoration" : "none"})}
                    );

$(".flex-item").hover(
    function(){
      $(this).filter(':not(:animated)').animate({
         marginLeft:'9px',
         fontSize: '18px'
      },'slow');
    // This only fires if the row is not undergoing an animation when you mouseover it
    },
    function() {
      $(this).animate({
         marginLeft:'0px',
        fontSize: '14px'

      },'slow');
    }
);

