$(document).ready(function(){

    //Get the JSON array
    $.getJSON( "projects.json", function( data ) {
        var current_project = $('#title').text().toLowerCase(),
            project_index = 0;

        var projects = data.projects;


        for(var j in projects){
            var test_project = projects[j].name.toLowerCase();

            if(test_project === current_project){
                project_index = j;
                break;
            }
        }

        put_in_next(projects[project_index]);
        put_in_prev(projects[project_index]);

    });
});

var put_in_next = function(object){
    var next_html   = $('#footer-nav-next'),
        next        = object.next,
        url         = './' + next.split(' ').join('_').toLowerCase() + '.html';

    next_html.append('<a href="'+ url + '"><p class="other-project other-project-title">' + next + '<span class="fa fa-fw fa-chevron-right"></span></p></a>');
};

var put_in_prev = function(object){
    var previous_html   = $('#footer-nav-previous'),
        previous        = object.previous,
        url             = './' + previous.split(' ').join('_').toLowerCase() + '.html';

    previous_html.append('<a href="'+ url + '"><p class="other-project other-project-title"><span class="fa fa-fw fa-chevron-left"></span>'+ previous +'</p></a>');
};
