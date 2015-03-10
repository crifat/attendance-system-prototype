$(document).ready(function(){
    $('.login-form').show();
    $('.select-course').hide();
    $('.select-contact-event').hide();
    $('.students-list').hide();

    var current_page = 0; //login-form

    $('#login-btn').on('click', function () {
        $('.login-form').hide(300);
        $('.select-course').show(300);
        current_page = 1;
    });
    $('.course').on('click', function () {
        $('.select-course').hide(300);
        $('.select-contact-event').show(300);
        current_page = 2;
    });
    $('.contact').on('click', function () {
        $('.select-contact-event').hide(300);
        $('.students-list').show(300);
        current_page = 3;
    });
    var student_1 = 0;
    var student_2 = 0;
    var student_3 = 0;
    var student_4 = 0;

    $('#student1').on('click', function () {
        if(student_1 == 0)
        {
            $('#student1').addClass('red');
            student_1 = 1;
        }
        else
        {
            $('#student1').removeClass('red');
            student_1 = 0;
        }
    });
    $('#student2').on('click', function () {
        if(student_2 == 0)
        {
            $('#student2').addClass('red');
            student_2 = 1;
        }
        else
        {
            $('#student2').removeClass('red');
            student_2 = 0;
        }
    });
    $('#student3').on('click', function () {
        if(student_3 == 0)
        {
            $('#student3').addClass('red');
            student_3 = 1;
        }
        else
        {
            $('#student3').removeClass('red');
            student_3 = 0;
        }
    });
    $('#student4').on('click', function () {
        if(student_4 == 0)
        {
            $('#student4').addClass('red');
            student_4 = 1;
        }
        else
        {
            $('#student4').removeClass('red');
            student_4 = 0;
        }
    });
    $('.submit-attn').on('click', function(){
        alert('Attendance Successfully Recorded!');
        $('.students-list').hide(300);
        $('.select-course').show(300);
        current_page = 1;
    });
    $('.back-button').on('click', function(){
        if(current_page == 1)
        {
            $('.login-form').show(300);
            $('.select-course').hide(300);
            current_page = 0;
        }
        else if(current_page == 2)
        {
            $('.select-course').show(300);
            $('.select-contact-event').hide(300);
            current_page = 1;
        }
        else if(current_page == 3)
        {
            $('.select-contact-event').show(300);
            $('.students-list').hide(300);
            current_page = 2;
        }
    });
});