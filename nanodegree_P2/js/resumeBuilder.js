'Use strict';

var data = '%data%';
var $header = $('#header');

var bio = {
  'name' : 'Kevin Dexter',
  'role' : 'Web Developer',
  'contacts' : {
    'mobile' : '612-590-3784',
    'email' : 'kevin.dexter@comcast.net',
    'location' : '4235 Pineview Lane N, MN 55442'
  },
  'picture' : 'images/me.jpg',
  'welcome' : 'Welcome to my biography!',
  'skills' : ['Java', 'Python', 'HTML (soon)', 'CSS (soon)', 'JS (soon)']
}

var work = {
  'jobs' : [
    {
      'position' : 'Software Quality Engineer',
      'employer' : 'Proto Labs Inc',
      'dates' : 'June 2014 - July 2015',
      'location' : 'Maple Plain, MN',
      'description' : 'Worked as a blackbox tester by posing as a customer to our website or a user of our software to locate any bugs that may have been missed by the developers.\nWrote regression tests using QA Wizard Pro and Pybot to run daily regression tests on our customer facing websites.',
      'url' : 'http://www.protolabs.com/'
    }, {
      'position' : 'Computer Science Tutor',
      'employer' : 'Gustavus Adolphus College',
      'dates' : 'Sept 2012 - July 2014',
      'location' : 'Saint Peter, MN',
      'description' : 'Offered assistance and guidance to struggling Computer Science students at Gustavus Adolphus College during the school year.\nPerformed the duties required of a Lab Assistant',
      'url' : 'https://gustavus.edu/'
    }
  ]
}

var projects = {
  'projects' : [
    {
      'title' : 'Portfolio site',
      'dates' : '7/20/2014 - 7/24/2014',
      'description' : 'Replicating and then customizing the design for a portfolio page using a PDF as our basis',
      'images' : ['images/comp-img.jpg', 'images/tab-img.jpg', 'images/phone-img.jpg'],
      'url' : 'https://github.com/viracerbus/nanodegree_P1'
    }
  ]
}

var education = {
  'schools' : [
    {
      'name' : 'Gustavus Adolphus College',
      'degree' : 'BA',
      'location' : 'Saint Peter, MN',
      'majors' : ['Computer Science'],
      'dates' : 'September 2010 - July 2014',
      'url' : 'https://gustavus.edu/'
    }
  ]
}

var online = {
  'classes' : [
    {
      'title' : 'Front-End Development',
      'name' : 'Udacity',
      'dates' : 'July 2015 - present',
      'url' : 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
    }
  ]
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace(data, bio.name);
  var formattedRole = HTMLheaderRole.replace(data, bio.role);
  $header.append(formattedName);
  $header.append(formattedRole);
  for (var method in bio.contacts) {
    if (bio.contacts.hasOwnProperty(method)) {
      eval ('var formattedMethod = HTML' + method + '.replace(data, bio.contacts[method])');
      $header.append(formattedMethod);
      $('#footerContacts').append(formattedMethod);
    }
  }
  var formattedPic = HTMLbioPic.replace(data, bio.picture);
  var formattedWelcome = HTMLWelcomeMsg.replace(data, bio.welcome);
  $header.append(formattedPic);
  $header.append(formattedWelcome);
  if(bio.skills.length) {
    $header.append(HTMLskillsStart);
    for (var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace(data, bio.skills[skill]);
      $('#skills').append(formattedSkill);
    }
  }
}

work.display = function () {
  for (var job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
    formattedEmployer = formattedEmployer.replace('#', work.jobs[job].url);
    var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].position);
    $('.work-entry:last').append(formattedEmployer + formattedTitle);

    var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
    $('.work-entry:last').append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
    $('.work-entry:last').append(formattedDescription);
  }
}

// Internationalization of name follows bellow
/*
$('#main').append(internationalizeButton);

function inName(name) {
  name.trim();
  var nameArray = name.split(' ');
  firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  var lastName = nameArray[1].toUpperCase();
  return firstName + ' ' + lastName;
}
*/

projects.display = function() {
  for (var project in projects.projects) {
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
    formattedTitle = formattedTitle.replace('#', projects.projects[project].url);
    var formattedDate = HTMLprojectDates.replace(data, projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
    
    $('.project-entry:last').append(formattedTitle);
    $('.project-entry:last').append(formattedDate);
    $('.project-entry:last').append(formattedDescription);
    for (var image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
      $('.project-entry:last').append(formattedImage);
    }
  }
}

education.display = function() {
  for (var school in education.schools) {
    $('#education').append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace(data, education.schools[school].name);
    formattedName = formattedName.replace('#', education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
    var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
    var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);

    $('.education-entry:last').append(formattedName);
    $('.education-entry:last').append(formattedDegree);
    $('.education-entry:last').append(formattedDates);
    $('.education-entry:last').append(formattedLocation);
    for (var major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].majors[major]);
      $('.education-entry:last').append(formattedMajor);
    }
  }
$('.education-entry:last').append(HTMLonlineClasses);
  for (var course in online.classes) {
    var formattedTitle = HTMLonlineTitle.replace(data, online.classes[course].title);
    formattedTitle = formattedTitle.replace('#', online.classes[course].url);
    var formattedSchool = HTMLonlineSchool.replace(data, online.classes[course].name);
    var formattedDates = HTMLonlineDates.replace(data, online.classes[course].dates);
    var formattedURL = HTMLonlineURL.replace(data, online.classes[course].url);
    formattedURL = formattedURL.replace('#', online.classes[course].url);
    $('.education-entry:last').append(formattedTitle);
    $('.education-entry:last').append(formattedSchool);
    $('.education-entry:last').append(formattedDates);
    $('.education-entry:last').append(formattedURL);
  }
}


bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);